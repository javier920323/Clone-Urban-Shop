import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import MyAccount from "../MyAccount";
import NotFound from "../NotFound";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import Navbar from "../../components/Navbar";
import { ShopingCardProvider } from "../../context";

const AppRoutes = () => {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return router;
};

function App() {
  return (
    <ShopingCardProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShopingCardProvider>
  );
}

export default App;
