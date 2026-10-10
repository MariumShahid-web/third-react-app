import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const param = useParams();
  const id = param.id;
  const products = [
    {
      id: 1,
      name: "RTX 5070",
      desc: "High performance graphics card",
      price: 100,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzus2FBMIL9WscN_GYyFE6fLOW8Y3VXLrhQ&s",
    },
    {
      id: 2,
      name: "Samsung S25 Ultra",
      desc: "High resolution monitor",
      price: 200,
      imageURL:
        "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png",
    },
  ];
  const productInfo = products.filter(
    (product) => product.id === parseInt(id)
  )[0];
  return (
    <div>
      Detail for product ID: {id}
      <h2>{productInfo.name}</h2>
      <p>{productInfo.desc}</p>
      <p>{productInfo.price} PKR</p>
      <img src={productInfo.imageURL} alt={productInfo.name} width={200} />
    </div>
  );
};

export default Detail;