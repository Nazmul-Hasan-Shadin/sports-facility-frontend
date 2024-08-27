import { createBrowserRouter } from "react-router-dom";

import { routeGenerator } from "../utils/routeGenerator";
import { authenticUserRoutes, userPaths } from "./route.user";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Bookings from "../pages/users/Bookings/Bookings";
import DashboardHome from "../pages/users/Home/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path:'user/home',
       element:<DashboardHome></DashboardHome>
      }
    ],
  },
]);

export default router;
