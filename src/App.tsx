import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import TopNavbar from "./components/ui/TopNavbar";
import Home from "./pages/Home/Home/Home";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto ">
      <TopNavbar />

      <ConfigProvider theme={{
        components:{
          Menu:{
            itemSelectedBg:"#00725A"
          }
        }
      }}>
        <Navbar />
      </ConfigProvider>

      <Home />
    </div>
  );
}

export default App;
