import Service from '../../Service/Service';

export default function Jewelry() {
  const category = "Jewelery";
  return (
    <div>
      <Service category={category} />
    </div>
  )
  // const [jewelry, setJewelry] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/jewelery")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setJewelry(json);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <div>Loading...</div>;

  // return (
  //   <div>
  //     <h1>Jewelry List</h1>
  //     <div className={styles.gridContainer}>
  //       {jewelry.map((product) => (
  //         <div key={product.id} className={styles.productCard}>
  //           <img src={product.image} alt={product.title} className={styles.productImage} />
  //           <h3>{product.title}</h3>
  //           <p>{product.description}</p>
  //           <h4>Price: ${product.price}</h4>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}