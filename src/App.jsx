import React from "react";
import { NavLink } from "react-router";

function App() {
  const products = [
    { id: 1, 
      name: "RTX 5070",
      desc:"High performance graphic card",
      price:100,
      imageurl:"https://static.store-cdn.com/files/4012/Images/pny-rtx-5070-oc-12gb-triple-fan-gpu-price-in-pakistan-junaid-4012-0-240426101359508.webp"
     },
    { id: 2, 
      name: "RTX 5080",
      desc:"Even higher performance graphic card",
      price:200,
      imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AqbAuC2ZT6OiOnbls3lp7Vym8CIMXhOQf0iOunRyeQ&s=10"
     },
  ];
  return (
    <>
      <nav>
        <NavLink to="/collection/123" end>
          Product Collection 1234
        </NavLink>
      </nav>

   <h1>This is An Ecommerce Store</h1>
   <div className="flex gap-2">
    {products.map((products)=>{
      return(
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>{products.desc}</p>
          <p>${products.price}</p>
          <img src={products.imageurl} alt={products.name} width={100} />
          <NavLink to={`/product/${products.id}`}>Details</NavLink>
        </div>
      )
    })}
   </div>
   
    </>
  );
}
export default App;
