import { createBrowserRouter } from "react-router";
import HomePage from "../home/HomePage";
import Root from "../layout/Root";
import Registration from "../pages/registration/Registration";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
