import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import "../src/Styles/app.scss";
import Loader from "./Components/Loader";


const Dashboard = lazy(()=>import("./Pages/Dashboard"))
const Products = lazy(() => import("./Pages/Products"));
const Transaction = lazy(() => import("./Pages/Transactions"));
const Customers = lazy(() => import("./Pages/Customers"));

function App() {

  return (
      <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="admin/dashboard" element={<Dashboard/>} />
            <Route path="admin/products" element={<Products/>} />
            <Route path="admin/customers" element={<Customers/>} />
            <Route path="admin/transactios" element={<Transaction/>} />
          </Routes>
          </Suspense>
      </Router>
  )
}

export default App
