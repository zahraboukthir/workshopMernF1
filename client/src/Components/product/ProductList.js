import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const ProductList = () => {
  const list = useSelector((state) => state.prod.products);
  // console.log(list)
  const currentUser=useSelector(state=>state.auth.currentUser)
  // console.log(currentUser&& currentUser.role)
  return (
    <div  style={{
      display: "flex",
      flexDirection:"column",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }} >
      {currentUser  && currentUser.role=="saler"?
        <Link to="/products/add">add prod</Link> : ""

      }
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {list.length &&
          list.map((el) => <ProductsCard prod={el} key={el._id} />)}
      </div>
    </div>
  );
};

export default ProductList;
