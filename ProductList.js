import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  const [products,setProducts] = useState([]);
  const[url,setUrl] = useState("http://localhost:8000/products");
  const{data:product} = useFetch(url);
  // const [counter,setCounter] = useState(0);
 // console.log(products);
  // useEffect(()=>{
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => setProducts(data));
  // },[url]);
  // useEffect(()=>{
  //   const fetchProducts = async () =>{
  //     const response = await fetch(url);
  //     const data = await response.json(url);
  //     setProducts(data);
  //   }
  //   fetchProducts();
  //   console.log("-");
  // },[fetchProducts]);
  // useEffect(()=>{
  //   console.log(counter);
  // },[counter]);
  return (
    <section>
      <div className="filter">
        <button onClick={()=> setCounter(counter+1)}>{counter}</button>
      <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
      <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=1")}>In Stock</button>
      </div>
      { products.map((product)=>(
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
          </p>
          </div>
        ))
      }
    </section>
  )   
}

