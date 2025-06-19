import React, { useState, useContext, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { globalContext } from "../components/Mycontext";
import backgroundImage from "../Images/table.jpg";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/productsSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoStarSharp } from "react-icons/io5";
import { VscAdd } from "react-icons/vsc";

export default function Productdetails() {
  const { id } = useParams();
  const { data } = useContext(globalContext);
  const [activeTab, setActiveTab] = useState("description");
  const dispatch = useDispatch();

  const product = useMemo(() => {
    return data.find((item) => item.id.toString() === id) || {};
  }, [data, id]);

  const relatedProducts = useMemo(() => {
    return data.filter(
      (item) => item.category === product?.category && item.id.toString() !== id
    );
  }, [data, id, product?.category]);

  const getStars = (rating) =>
    "⭐".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "⭐" : "");

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.productName} added to cart!`, {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
    });
  };

  const [newReview, setNewReview] = useState("");
  const [localReviews, setLocalReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (newReview.trim() === "") {
      toast.error("Review cannot be empty");
      return;
    }
    setLocalReviews([...localReviews, newReview]);
    setNewReview("");
    toast.success("Review submitted!");
  };

  const combinedReviews = [
    ...(Array.isArray(product.reviews) ? product.reviews : []),
    ...localReviews,
  ];

  if (!product.productName)
    return <div className="text-center mt-20 text-xl">Product not found</div>;

  return (
    <div>
      {/* Banner */}
      <div
        className="w-full h-[110px] bg-cover bg-center flex items-center justify-center mt-[0px] shadow-lg "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1
          className="text-5xl font-bold text-white backdrop-blur-sm px-5"
          style={{ fontSize: 32, color: "white" }}
        >
          {product.productName}
        </h1>
      </div>

      {/* Product Display */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.imgUrl}
            alt={product.productName}
            className="rounded-xl w-full h-auto max-h-[300px] object-contain hover:scale-105 transition"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold" style={{ fontSize: 25 }}>
            {product.productName}
          </h2>
          <p className="text-yellow-500 text-l">
            <p
              className="mb-2 "
              style={{ color: "gold", fontSize: "18px", display: "flex" }}
            >
              {[...Array(5)].map((_, i) => (
                <IoStarSharp key={i} />
              ))}
              <span style={{ marginLeft: 30, color: "black", fontSize: 15 }}>
                {product.avgRating} ratings
              </span>
            </p>
          </p>
          <p className="text-3xl font-bold text-black-600">${product.price}</p>
          <p className="text-lg text-gray-500">Category: {product.category}</p>
          <p className="text-gray-700">
            {product.description?.slice(0, 100)}...
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 bg-blue-900 hover:bg-blue-300 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md"
            style={{ borderRadius: 6 }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex gap-8  mb-4">
          <button
            className={`pb-2 font-medium text-lg ${
              activeTab === "description" ? "text-black " : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 font-medium text-lg ${
              activeTab === "reviews" ? " text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" ? (
          <p className="text-gray-800">
            {product.description || "No description available."}
          </p>
        ) : (
          <div>
            <h3 className="text-xl font-bold mb-2">Reviews</h3>
            {combinedReviews.length > 0 ? (
              <ul className="list-disc list-inside space-y-2 mb-4">
                {combinedReviews.map((review, index) => (
                  <li key={index} className="text-gray-700">
                    {typeof review === "string"
                      ? review
                      : review?.text || review?.comment || "Review"}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mb-4">No reviews available.</p>
            )}

            {/* Review Textarea */}
            <div className="mt-6">
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800"
                rows="4"
                placeholder="Write your review..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button
                onClick={handleReviewSubmit}
                className="mt-4 bg-blue-900 hover:bg-blue-300 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md"
                style={{ borderRadius: 6 }}
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto px-15 mt-16">
          <h2 className="text-3xl font-bold mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className=" bg-white p-3 rounded-lg shadow-sm relative group hover:shadow-lg transition"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-full h-40 object-contain rounded-md"
                  />
                </Link>
                <div className="mt-3 space-y-1">
                  <h4 className="text-lg font-semibold">{item.productName}</h4>
                  <p className="text-yellow-500">
                    <p
                      className="mb-2 "
                      style={{
                        color: "gold",
                        fontSize: "18px",
                        display: "flex",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <IoStarSharp key={i} />
                      ))}
                    </p>
                  </p>
                  <p className="text-black-200 font-bold text-xl">
                    ${item.price}
                  </p>
                </div>
                <FaHeart className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500 cursor-pointer" />
                <button
                  onClick={() => handleAddToCart(item)}
                  className="border-1 group-hover:text-red-500"
                  style={{
                    borderRadius: 19,
                    marginLeft: 250,
                    marginTop: -70,
                    height: 37,
                    width: 38,
                    backgroundColor: "white",
                  }}
                >
                  <VscAdd style={{ fontSize: 20, marginLeft: 8 }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
