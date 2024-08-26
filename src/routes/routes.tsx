import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import  Login from '../pages/Login'
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register";
import FacilityDetailsPage from "../pages/FacilityDetailsPage/FacilityDetailsPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path: "/",
          element:<Home/>
         
        },
        {
          path: "login",
          element:<Login/>
         
        },
        {
          path: "facility/:facilityId",
          element:<FacilityDetailsPage/>
         
        },
        
      ]
     
    },
    {
      path: "/register",
      element:<Register/>
     
    },
    

  ]);


  export default router
  