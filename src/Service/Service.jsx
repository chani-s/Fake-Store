import React, { useEffect, useState } from 'react';
import { shouldFetch, updateFetchTimeAndData, getStoredData } from '../Lib/fetchCheck';
import styles from "./Service.module.css";

export default function Service({ category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryLowerCase = category.toLowerCase();
    let url = `https://fakestoreapi.com/products/category/${categoryLowerCase}`;
    
    // שינוי ה-URL בהתאם לקטגוריה
    if (category === "Books") {
        url = "http://localhost:3000/";
    }

    useEffect(() => {
        if (shouldFetch(category)) { // בדוק אם יש צורך ב-fetch
            setLoading(true);
            fetch(url) // בצע fetch לפי ה-URL שנקבע
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    console.log("load fetch");
                    return res.json();
                })
                .then((json) => {
                    setProducts(json);
                    updateFetchTimeAndData(category, json); // עדכן את המידע ב-localStorage
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        } else {
            // שימוש בנתונים השמורים
            const storedData = getStoredData(category);
            if (storedData) {
                setProducts(storedData);
                setLoading(false);
            }
        }
    }, [url, category]); // התלות ב-url ובקטגוריה

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>{category} List</h1>
            <div className={styles.gridContainer}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                        <h3>{product.title}</h3>
                        {/* <p>{product.description}</p> */}
                        <h4>Price: ${product.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import { shouldFetch, updateFetchTimeAndData, getStoredData } from '../Lib/fetchCheck';

// import styles from "./Service.module.css";

// export default function Service({ category }) {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const categoryLowerCase = category.toLowerCase();
//     let url = `https://fakestoreapi.com/products/category/${categoryLowerCase}`;
//     if(category === "Books") {
//         url = "http://localhost:3000/";
//     }

//     useEffect(() => {
//         if (shouldFetch(category)) {
//             setLoading(true);
//             fetch(url)
//                 .then((res) => {
//                     if (!res.ok) {
//                         throw new Error("Network response was not ok");
//                     }
//                     console.log("load fetch");
//                     return res.json();
//                 })
//                 .then((json) => {
//                     setProducts(json);
//                     updateFetchTimeAndData(category, json); 
//                     setLoading(false);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching data:", error);
//                     setLoading(false);
//                 });
//         } else {
//             const storedData = getStoredData(category);
//             if (storedData) {
//                 setProducts(storedData);
//                 setLoading(false);
//             }
//         }
//     }, [url, category]);

//     if (loading) return <div>Loading...</div>;
//     return (
//         <div>
//             <h1>{category} List</h1>
//             <div className={styles.gridContainer}>
//                 {products.map((product) => (
//                     <div key={product.id} className={styles.productCard}>
//                         <img src={product.image} alt={product.title} className={styles.productImage} />
//                         <h3>{product.title}</h3>
//                         {/* <p>{product.description}</p> */}
//                         <h4>Price: ${product.price}</h4>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }