import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log(productId);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            const single = data.filter((pd) => pd.id == productId);
            setProduct(single);
            // console.log(data);
          });
    }, []);
    console.log( 'comes from ', product)
    return (
        <div>
        
            <h1>This is Product Details { productId}</h1>
        </div>
    );
};

export default ProductDetails;