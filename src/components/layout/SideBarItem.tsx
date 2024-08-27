import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <NavLink to={"/dashboard/user/home"}>Dashboard</NavLink>,
    icon: <UserOutlined />, // Add an icon for visual indication when collapsed
  },
  {
    key: "2",
    label: <NavLink to={"/dashboard/bookings"}>Bookings</NavLink>,
    // Add an icon for visual indication when collapsed
  },
];

const SideBarItem = () => {
  return (
    <Sider
    className="h-[100vh]"
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/111014373?v=4"
        alt="User"
        style={{ width: "100px", marginBottom: "10px" }}
      />
    </div>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={items}
    />
  </Sider>
  );
};

export default SideBarItem;
