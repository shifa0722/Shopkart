import { useEffect, useState } from "react";
import Product2 from "../components/Product2";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((prod) => (
        <Product2
          title={prod.title}
          price={prod.price}
          image={prod.image}
          category={prod.category}
        />
      ))}
    </div>
  );
}