import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import TopNavbar from "./components/ui/TopNavbar";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto ">
      <TopNavbar />

      <Navbar></Navbar>
    </div>
  );
}

export default App;
