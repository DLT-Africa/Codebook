import { Route, Routes } from "react-router-dom";
import { HomePage, ProductList } from "../pages";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/Cart/CartPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="order-summary" element={<OrderPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}/>

        
      </Routes>
    </>
  );
};
