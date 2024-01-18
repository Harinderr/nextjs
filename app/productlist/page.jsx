"use client";
import { useEffect, useState } from "react";
export default function ProductList() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const apidata = await fetch(
          "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
        );
        const data = await apidata.json();

        setproducts(data);
    
      } catch (err) {
        console.log("there is an error" + err);
      }
    }
    fetchData();
  }, []);
  
  return (
    <main>
      <h1> This is the product list</h1>
      {products.map((val,index) => {
       
        return (  <h2 key={index}>{val.name } {'  '} {val.price}</h2>)
       
      })}
    </main>
  );
}
