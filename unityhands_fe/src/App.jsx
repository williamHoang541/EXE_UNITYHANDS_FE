import { Routes, Route } from "react-router-dom";
import { PATH_NAME } from "./constant/pathname";
import Login from "./pages/admin/Login/Login";
import Register from "./pages/admin/Register/Register";
import ForgotPassword from "./pages/admin/ForgotPassword/ForgotPassword";
import NewPassword from "./pages/admin/NewPassword/NewPassword";
import Itemspage from "./pages/itemspage/Itemspage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders/AdminOrders";
import Customers from "./pages/admin/Customers/Customers";
import Home from "./pages/customer/Home/Home";
import Layout_Customer from "./components/layout/Layout_Customer";
import ProductDetail from "./pages/customer/ProductDetail/ProductDetail";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH_NAME.LOGIN} element={<Login />} />
        <Route path={PATH_NAME.REGISTER} element={<Register />} />
        <Route path={PATH_NAME.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATH_NAME.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH_NAME.ITEMS} element={<Itemspage />} />
        <Route path={PATH_NAME.ABOUT_US} element={<AboutUs />} />
        <Route path={PATH_NAME.CONTACT_US} element={<ContactUs />} />
        <Route path={PATH_NAME.DASH_BOARD} element={<Dashboard />} />
        <Route path={PATH_NAME.PRODUCTS} element={<AdminProducts />} />
        <Route path={PATH_NAME.ORDERS} element={<AdminOrders />} />
        <Route path={PATH_NAME.CUSTOMERS} element={<Customers />} />


        <Route element={<Layout_Customer />}>
        <Route path={PATH_NAME.HOME} element={<Home />} />
        <Route path={PATH_NAME.PRODUCT_DETAILS} element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
