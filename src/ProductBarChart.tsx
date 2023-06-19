import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StoreContext } from './StoreContext';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  },
  category: string;
}

const ProductBarChart: React.FC = () => {
  const { products, yAxis, selectedCategory, selectedProduct } = useContext(StoreContext);
  const categoryProducts = selectedCategory ? products.filter((product: Product) => product.category === selectedCategory) : [];

  const seriesData: Highcharts.SeriesOptionsType[] = [
    {
      type: 'column',
      name: 'Products',
      data: categoryProducts.map((product: Product) => [
        product.title,
        yAxis === 'rating' ? product.rating.rate : product.price,
      ]),
    },
  ];

  const options: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Product Data',
    },
    xAxis: {
      categories: categoryProducts.map((item: Product) => item.title),
    },
    yAxis: {
      title: {
        text: yAxis === 'rating' ? 'Rating' : 'Price',
      },
    },
    series: seriesData,
  };

  return (
    <div>
      {selectedCategory ? selectedProduct ? null : <HighchartsReact highcharts={Highcharts} options={options} /> : <div> {'Please Select Category '} </div>}
    </div>
  );
};

export default ProductBarChart;
