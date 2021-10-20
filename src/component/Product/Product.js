import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {title, description, image, price,id } = props.product;
    return (
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            src={image}
            alt="product_image"
            className="lg:h-60 md: h-48 md:w-full w-1/3 h-1/2  p-4"
          />
          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
            <h1 className="text-2xl font-semibold mb-3">{title.slice(0,10)}</h1>
            <p className="leading-relaxed mb-3">{description.slice(0,30)}</p>
          </div>
        </div>
        <button type="button"><Link to={`/service/${id}`  }>Product Details</Link></button>
      </div>
    );
};

export default Product;