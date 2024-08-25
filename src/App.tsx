import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import TopNavbar from "./components/ui/TopNavbar";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto ">
      <TopNavbar />

      <Navbar></Navbar>
      <Home/>
    </div>
  );
}

export default App;
