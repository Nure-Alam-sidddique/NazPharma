import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="inset-x-0 h-auto bg-gray-900 fixed bottom-0 flex items-center text-center">
            <h1 className="text-center mx-auto text-white flex flex-col block">
                <Link to="#">service</Link>
                <Link to="#">Home</Link>
                <Link to="#">Blog</Link>
                <Link to="#">About</Link>
                
            </h1>
            <h1 className="text-center mx-auto text-white">This is footer part</h1>
            <h1 className="text-center mx-auto text-white">This is footer part</h1>
            <h1 className="text-center mx-auto text-white">This is footer part</h1>
        </div>
    );
};

export default Footer;