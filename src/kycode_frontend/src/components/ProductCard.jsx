import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <button
          style={{
            backgroundColor: "#1976D2",
            color: "white",
            border: "none",
            padding: "8px",
          }}
        >
          Lihat Detail
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
