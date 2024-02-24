import { useRoutes } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";


export function Route() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
      //   children: [
      //     {
      //         path: "/login",
      //       element: <Login />,
      //     },
      //   ],
    },
  ]);

  return <div>{routes}</div>;
}
