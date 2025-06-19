import React from 'react';
import '../components/Footer.css';
import { IoBag } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className=" text-white py-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Description */}
          <div className="col-md-4 mb-4">
            <h5 className='flex' ><IoBag />MART</h5>
            <p style={{fontWeight:300}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea accusantium at vero, nihil dolores, ut minima odio dolorum consectetur sunt placeat aut nesciunt, autem veniam blanditiis repellat praesentium modi numquam?
            </p>
          </div>

          {/* Column 1 */}
          <div className="col-md-2 mb-4">
            <h6>About Us</h6>
            <ul className="list-unstyled" style={{fontWeight:300}}>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Stores</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Cares</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms & conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6>Customer Care</h6>
            <ul className="list-unstyled" style={{fontWeight:300}}>
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">How to Buy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Track Your Order</a></li>
              <li><a href="#" className="text-white text-decoration-none">Corporate & Bulk Purchasing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns and Refunds</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6>Contact Us</h6>
            <ul className="list-unstyled" style={{fontWeight:300}}>
              <li><a href="#" className="text-white text-decoration-none">70 Washington square , south , newyork, NY10012, United States</a></li>
              <li><a href="#" className="text-white text-decoration-none">Email : example@gmail.com</a></li>
              <li><a href="#" className="text-white text-decoration-none">Phone : +91 788677989</a></li>
            </ul>
          </div>

        </div>
       
      </div>
    </footer>
  );
}
