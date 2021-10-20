import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="inset-x-0 h-auto bg-gray-900 fixed bottom-0 flex items-center text-center">
        <div className="text-center mx-auto text-white flex flex-col block">
          <h1>For Customer</h1>
          <ul>
              <li> <Link to="#">Request Order</Link></li>
              <li> <Link to="#">Urgent Order</Link></li>
              <li> <Link to="#">Find Store</Link></li>
          </ul>
        </div>
            <div className="text-center mx-auto text-white">
                 <h1>Support</h1>
          <ul>
              <li> <Link to="#">Contact Us</Link></li>
              <li> <Link to="#">Return Policy</Link></li>
              <li> <Link to="#">Terms & Condition</Link></li>
              <li> <Link to="#">Privacy Policy</Link></li>
          </ul>
            </div>
            <hr/>
      </div>
    );
};

export default Footer;