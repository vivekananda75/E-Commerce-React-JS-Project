import React from "react";
import { IoBag } from "react-icons/io5";
import "../components/Header.css";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import productpage from "../pages/productpage";
import { useSelector } from "react-redux";

export default function Header() {
  const cartCount = useSelector((state) => state.cartItems.cart.length);
  return (
    <div className="shadow">
      <header className="d-flex ">
        <div className="d-flex logo-o">
          <IoBag className="bag-icon" />
          {/* link 1*/}
          <Link to="/">
            {" "}
            <h1 className="logo-text">MART</h1>
          </Link>
        </div>
        <ul className="d-flex nav-links gap-5 ">
           {/* link 2*/}
          <Link to="/">
            <li className="link-">Home</li>
          </Link>
           {/* link 3*/}
          <Link to="Productpage">
            <li className="link-">Shop</li>
          </Link>
           {/* link 4*/}
          <Link to="Cartpage">
            <li className="link-">Cart</li>
          </Link>
          <li className="link-">
            <IoPerson />
          </li>
           {/* link 5*/}
          <li>
            <Link to="Cartpage" className="relative">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-[-5px] right-[-16px] bg-blue-900 text-white rounded-full text-xs px-2">
                  {cartCount}
                </span>
              )}
            </Link>
                      
          </li>
        </ul>
      </header>
    </div>
  );
}
