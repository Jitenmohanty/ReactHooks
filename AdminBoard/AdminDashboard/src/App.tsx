import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { lazy, Suspense } from "react";
import "../src/Styles/app.scss";
import Loader from "./Components/Loader";
import UpdateProduct from "./Pages/Management/UpdateProduct";
import TransactionManagement from "./Pages/Management/TransactionManagement";


const Dashboard = lazy(()=>import("./Pages/Dashboard"))
const Products = lazy(() => import("./Pages/Products"));
const Transaction = lazy(() => import("./Pages/Transactions"));
const Customers = lazy(() => import("./Pages/Customers"));
const Stopwatch = lazy(() => import("./Pages/Apps/Stopwatch"));
const Cuppon = lazy(() => import("./Pages/Apps/Cuppon"));
const Toss = lazy(() => import("./Pages/Apps/Toss"));
const AddProduct = lazy(() => import("./Pages/Management/AddProduct"));

function App() {

  return (
      <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
            {/* DashBoard */}
            <Route path="admin/dashboard" element={<Dashboard/>} />
            <Route path="admin/products" element={<Products/>} />
            <Route path="admin/customers" element={<Customers/>} />
            <Route path="admin/transactions" element={<Transaction/>} />
            {/* Management */}
            <Route path="/admin/product/new" element={<AddProduct/>}/>
            <Route path="/admin/product/update/:id" element={<UpdateProduct/>}/>
            <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
            {/* Chart */}


            {/* Apps */}
            <Route path="admin/app/stopwatch" element={<Stopwatch/>} />
            <Route path="admin/app/cuppon" element={<Cuppon/>} />
            <Route path="admin/app/toss" element={<Toss/>} />
          </Routes>
          </Suspense>
      </Router>
  )
}

export default App
