import DashboardLayout from "../components/layout/DashboardLayout";
import About from "../pages/About/About";
import FacilityDetailsPage from "../pages/FacilityDetailsPage/FacilityDetailsPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bookings from "../pages/users/Bookings/Bookings";


export const userPaths = [

  {
    name: "Home",
    path: "/",
    element: <Home />,
   
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardLayout/>,
   
  },
  {
    path: "facility/:facilityId",
    element: <FacilityDetailsPage />,
  },
  {
    name: "Login",
    path: "login",
    element: <Login />,
   
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
   
  },
 
  {
    path: "/register",
    element: <Register />,
  },
];



export const authenticUserRoutes = [

  {
    name: "Home",
    path: "/",
    element: <Home />,
   
  },
  
  {
    name: "Bookings",
    path: "bookings/dashboard",
    element: <Bookings />,
   
  },

];

