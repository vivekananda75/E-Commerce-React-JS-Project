import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";
import backgroundImage from "../Images/table.jpg";
import { products } from '../DataFile/products';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addToCart } from "../ReduxToolKit/productsSlice"; 
import "react-toastify/dist/ReactToastify.css";

export default function Productpage() {
  const [selectedCategory, setSelectedCategory] = useState('Filter By Products');
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const categories = ['Filter By Products', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === 'Filter By Products' || p.category === selectedCategory) &&
      p.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.productName} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
    });
  };

  return (
    <div>
      {/* Header with Background */}
      <div
        className="w-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '130px'
        }}
      >
        <h1 className="text-white fw-bold" style={{ fontSize: '2.5rem', backdropFilter: 'blur(4px)' }}>
          Products
        </h1>
      </div>

      <div className="container my-5">
        {/* Filter + Search Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <select
            className="form-select"
            style={{
              width: 260,
              height: 40,
              backgroundColor: '#0d1a3b',
              color: 'white',
              borderRadius: 8,
              fontWeight: 500
            }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} style={{ backgroundColor: 'black' }}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            style={{ width: 700, height: 40, borderRadius: 30 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Products Grid */}
        <div className="row gx-0 gy-1">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 col-sm-8 g-5">
              <div
                className="card h-150 shadow border-0"
                style={{ width: 280, height: 370, marginLeft: 30 }}
              >
                <div className="position-relative">
                  {product.discount && (
                    <span
                      className="badge position-absolute"
                      style={{
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'darkblue',
                        borderRadius: 30,
                        fontWeight: 400
                      }}
                    >
                      {product.discount}% Off
                    </span>
                  )}
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.imgUrl}
                      alt={product.productName}
                      className="card-img-top p-3"
                      style={{ height: '200px', objectFit: 'contain' }}
                    />
                  </Link>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <div style={{ color: 'gold', fontSize: '18px', display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                  </div>
                  <p className="fw-bolder fs-5">${product.price}</p>
                  <div className="d-flex">
                    <button
                      className="border-1"
                      onClick={() => handleAddToCart(product)}
                      style={{
                        borderRadius: 19,
                        marginLeft: 210,
                        marginTop: -50,
                        height: 37,
                        width: 38,
                        backgroundColor: 'white'
                      }}
                    >
                      <VscAdd style={{ fontSize: 20, marginLeft: 8 }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <ToastContainer />
      </div>
    </div>
  );
}
