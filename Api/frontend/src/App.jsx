import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [error, loading, products] = customReactQuery("/api/products");

  if (error) {
    return <h3>Something went Wrong.</h3>;
  }

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <h3>Number of Products: {products.length}</h3>
      )}
   
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return [error,loading,products];
};
