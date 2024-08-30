import { Button, Drawer, DrawerProps, Dropdown, Menu, MenuProps } from "antd";
import Container from "../../Container/Container";
import { useState } from "react";
import "./Navbar.css";
import { FaHamburger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

import { userPaths } from "../../routes/route.user";
import { publicSidebarGenerator } from "../../utils/topbarGenerator";
const items: MenuProps["items"] = [
  {
    key: "Home",
    label: <NavLink to={"/"}>Home</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to={"/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "About",
    label: "About",
  },

  {
    key: "Login",
    label: <NavLink to={"/login"}>Login</NavLink>,
  },
  {
    key: "Register",
    label: <NavLink to={"/login"}>Login</NavLink>,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-3">
      <Container>
        <div className="bg-[#FFFFFF]                                                      ">
          <div className="flex justify-between items-center  px-5 md:px-0">
            <div className="flex-1 md:flex-none">
              <img
                className="h-7 w-28"
                src="http://www.nicdarkthemes.com/themes/tennis/wp/demo/tennis-club/wp-content/uploads/sites/2/elementor/thumbs/logo-spyn-p3ykr2ow6297n54ykmkxjfp9wy6ldwfod0qm3zpsns.png"
                alt=""
              />
            </div>
            <div className="   hidden md:flex">
              {/* <Menu
                mode="horizontal"
                className="flex  lg:gap-8  lg:text-[18px]"
              >
                <Menu.Item >Home</Menu.Item>
                <Menu.Item>About Us</Menu.Item>
                <Menu.Item>Dashboard</Menu.Item>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>product</Menu.Item>
              </Menu> */}

              <Menu
                className="flex lg:gap-3 lg:text-[18px]"
                mode="horizontal"
                items={publicSidebarGenerator(userPaths)}
              />
            </div>
            {/* for small device hide navigation */}

            <div className="md:hidden">
              <RxHamburgerMenu className="text-2xl" onClick={showDrawer} />

              <Drawer
                placement={"top"}
                closable={false}
                onClose={onClose}
                open={open}
                style={{ background: "transparent " }}
                className=" mt-12  "
                key={placement}
              >
                <Menu mode="vertical" className=" gap-8  p-0  text-[18px]">
                  <Menu.Item>Home</Menu.Item>
                  <Menu.Item>About Us</Menu.Item>
                  <Menu.Item>Dashboard</Menu.Item>
                  <Menu.Item>Home</Menu.Item>
                  <Menu.Item>product</Menu.Item>
                </Menu>
              </Drawer>
            </div>

            <div className="flex gap-3">
              <Button className="hidden md:block" type="default" danger>
                Login
              </Button>
              <Button type="primary" className="bg-[#F2A922] hidden md:block">
                Register
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
