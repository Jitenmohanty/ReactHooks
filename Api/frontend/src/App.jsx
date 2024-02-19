import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [error, loading, products] = customReactQuery("/api/products");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search,{
          signal:controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        //It work like you can send request response come before u can put anather request it cancel it
        if(axios.isCancel(error)){
          console.log('request Cancel',error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })()
    // Cleanup code
    // It is use to Unmount the mount function after use.
    return ()=>{
      controller.abort();
    }
  }, [search]);

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
      <input
        type="text"
        value={search}
        placeholder="enter Text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ;(async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);
//   return [error,loading,products];
// };
