import React, {useEffect, useState} from 'react';
import styles from "./Service.module.css";

export default function Service( {category} ){
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const categoryLowerCase = category.toLowerCase();

useEffect(() => {
  fetch(`https://fakestoreapi.com/products/category/${categoryLowerCase}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((json) => {
      setProducts(json);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, [categoryLowerCase]);

if (loading) return <div>Loading...</div>;
return (
  <div>
    <h1>{category} List</h1>
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
        </div>
      ))}
    </div>
  </div>
);
}