import { createBrowserRouter } from "react-router-dom";

import { routeGenerator } from "../utils/routeGenerator";
import { authenticUserRoutes, userPaths } from "./route.user";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Bookings from "../pages/users/Bookings/Bookings";
import DashboardHome from "../pages/users/Dashboard/DashboardHome";
import { publicSidebarGenerator } from "../utils/topbarGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children:routeGenerator(authenticUserRoutes)
  },
]);

export default router;
