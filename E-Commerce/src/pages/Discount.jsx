import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";
import { discoutProducts } from "../DataFile/products";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/productsSlice";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export default function Discount() {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.productName} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
    });
  };

  return (
    <div className="container my-5">
      <div className="row gx-0 gy-1">
        <h1 className="text-center">Big Discount</h1>
        {discoutProducts.map((item) => (
          <div key={item.id} className="col-md-4 col-sm-8 g-5">
            <div
              className="card h-150 shadow border-0"
              style={{ width: 280, height: 370, marginLeft: 30 }}
            >
              <div className="position-relative">
                <span
                  className="badge  position-absolute"
                  style={{
                    top: "10px",
                    left: "10px",
                    backgroundColor: "darkblue",
                    borderRadius: 30,
                    fontWeight: 400,
                  }}
                >
                  {item.discount}% Off
                </span>
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                </Link>
              </div>
              <br />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <div
                  className="mb-2 "
                  style={{ color: "gold", fontSize: "18px", display: "flex" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} />
                  ))}
                </div>
                <p className="fw-bolder fs-5">${item.price}</p>
                <div className="d-flex ">
                  <button
                    className="border-1"
                    onClick={() => handleAddToCart(item)}
                    style={{
                      borderRadius: 19,
                      marginLeft: 210,
                      marginTop: -50,
                      height: 37,
                      width: 38,
                      backgroundColor: "white",
                    }}
                  >
                    <VscAdd style={{ fontSize: 20, marginLeft: 8 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
}
