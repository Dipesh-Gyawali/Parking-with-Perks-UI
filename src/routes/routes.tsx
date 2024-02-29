import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Product } from "../components/product";
import { ProductDetail } from "../components/productDetail";

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
      path: "/product",
      element: <Product />,
      children: [
        {
          path: " /product", // Matches "/product" exactly
          element: <Product />, // Assuming you have a ProductList component
        },
      ],
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
  ]);

  return <div>{routes}</div>;
}
