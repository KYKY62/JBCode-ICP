import React from "react";
import { useParams } from "react-router-dom";
import products from "./data/products";

const DetailPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Produk Tidak Ditemukan</h2>;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <button
        style={{ backgroundColor: "#28a745", color: "white", padding: "10px" }}
      >
        Beli Sekarang
      </button>
    </div>
  );
};

export default DetailPage;
