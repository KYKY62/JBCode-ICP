import React from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        Produk Tersedia
      </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
