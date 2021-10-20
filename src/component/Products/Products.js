import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
    const  [products, setProducts ]= useState([]);
    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products);
    return (
      <section className="md:h-full flex item-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center md-12">
            <h5 className="text-base md:text-lg text-indigo-700 mb-1">
              See Our Recent Product
            </h5>
            <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">
              Hot Product for sell
            </h1>
          </div>
            <div className="flex flex-wrap -m-4 mt-5">
            {products.map((pd) => (
              <Product key={pd.id} product={pd}></Product>
            ))}
            </div>
        </div>
      </section>
    );
};

export default Products;