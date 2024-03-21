import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Product } from "../components/product";
import { ProductDetail } from "../components/productDetail";
import { Register } from "../components/register";
import { About } from "../components/about";

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
      path: "/about",
      element: <About />,
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
