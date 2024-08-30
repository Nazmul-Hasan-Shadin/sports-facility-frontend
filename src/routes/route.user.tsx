import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AboutPage from "../pages/About";
import About from "../pages/About/About";
import BookingForm from "../pages/BookingForm/BookingForm";
import ContactPage from "../pages/Contact";
import FacilityDetailsPage from "../pages/FacilityDetailsPage/FacilityDetailsPage";
import FacilityList from "../pages/FacilityList/FacilityList";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment/Payment";
import Register from "../pages/Register";
import BookingConfirmationPage from "../pages/admin/paymentPage/makePaymentPage";

import Bookings from "../pages/users/Bookings/Bookings";
import DashboardHome from "../pages/users/Dashboard/DashboardHome";

export const userPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
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
    name: "",
    path: "register",
    element: <Register />,
  },
  {
    name: "Dashbooard",
    path: "/user/dashboard",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
   
  },
  {
    name: "",
    path: "bookingForm",
    element: <BookingForm />,
  },

  { name: "Offered", path: "/offered", element: <FacilityList /> },
  {  path: "/pay", element: <Payment /> },
  { name: "Contact", path: "contact", element: <ContactPage /> },
  { name: "About", path: "about", element: <AboutPage /> },
];

export const authenticUserRoutes = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardHome />,
  },

  {
    name: "Bookings",
    path: "bookings",
    element: <Bookings />,
  },
];
