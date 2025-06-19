import React, { useContext } from 'react';
import { globalContext } from '../components/Mycontext';
import { IoStarSharp } from 'react-icons/io5';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addToCart } from "../ReduxToolKit/productsSlice"; 
import "react-toastify/dist/ReactToastify.css";

export default function Newarraivals() {
  const { data } = useContext(globalContext);
   const dispatch = useDispatch();
     const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.productName} added to cart!`, {
          position: "top-right",
          autoClose: 1000,
          theme: "light",
        });
      };

  const filtered = data.filter(
    (item) => item.category === 'sofa' || item.category === 'chairs'
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Best Sales</h1>
      <div className="row gx-0 gy-4 justify-content-center">
        {filtered.map((item, index) => {
          const isLast = index === filtered.length - 1;
          const isOdd = filtered.length % 2 !== 0;

          return (
            <div
              key={item.id} 
              className={`col-md-4 col-sm-8 g-5 ${isLast && isOdd ? 'mx-auto' : ''}` }
            >
              <div
                className="card h-100 shadow border-0"
                style={{ width: 280, height: 370 , marginLeft:30}}
              >
                <div className="position-relative">
                  <Link to={`/products/${item.id}`}><img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                  /></Link>  
                </div>
                <br />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <div className="mb-2" style={{ color: 'gold', fontSize: '18px', display:'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <IoStarSharp key={i} />
                    ))}
                  </div>
                  <p className="fw-bolder fs-5">${item.price}</p>
                  <div className="d-flex justify-content-end">
                    <button
                    onClick={() => handleAddToCart(item)}
                      className="border-1"
                      style={{
                        borderRadius: 19,
                        height: 37,
                        width: 38,
                        backgroundColor: 'white',
                        marginTop:-40
                      }}
                    >
                      <VscAdd style={{ fontSize: 20 ,marginLeft:8}} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
         <ToastContainer />
      </div>
    </div>
  );
}
