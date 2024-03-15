import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Product } from "../components/product";
import { ProductDetail } from "../components/productDetail";
import { Register } from "../components/register";

export function Route() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/parkingslot",
      element: <Product />,
      children: [
        {
          path: " /parkingslot", // Matches "/product" exactly
          element: <Product />, // Assuming you have a ProductList component
        },
      ],
    },
    {
      path: "/parkingslot/:id",
      element: <ProductDetail />,
    },
  ]);

  return <div>{routes}</div>;
}
