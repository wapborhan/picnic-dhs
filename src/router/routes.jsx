import { createBrowserRouter } from "react-router";
import HomePage from "../home/HomePage";
import Root from "../layout/Root";
import Registration from "../pages/registration/Registration";
import About from "../pages/about";
import Registered from "../pages/registered/Registered";
import Team from "../home/team";
import RegUserDetails from "../pages/registered/RegUserDetails";
import Frame from "../pages/frame/Frame";
import TicketModal from "../components/TicketModal";

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
        path: "registered",
        element: <Registered />,
      },
      {
        path: "registered/:slno",
        element: <RegUserDetails />,
      },
      {
        path: "teams",
        element: <Team />,
      },
      {
        path: "frame",
        element: <Frame />,
      },
      {
        path: "ticket",
        element: <TicketModal />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
