import { Button, Drawer, DrawerProps, Menu } from "antd";
import Container from "../../Container/Container";
import { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userPaths } from "../../routes/route.user";
import { publicSidebarGenerator } from "../../utils/topbarGenerator";
import { logOut, selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  // Get the authentication state
  const isAuthenticated = useAppSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="mt-3">
      <Container>
        <div className="bg-[#FFFFFF]">
          <div className="flex justify-between items-center px-5 md:px-0">
            <div className="flex-1 md:flex-none">
              <img
                className="h-7 w-28"
                src="http://www.nicdarkthemes.com/themes/tennis/wp/demo/tennis-club/wp-content/uploads/sites/2/elementor/thumbs/logo-spyn-p3ykr2ow6297n54ykmkxjfp9wy6ldwfod0qm3zpsns.png"
                alt="Logo"
              />
            </div>
            <div className="hidden md:flex">
              <Menu
                className="flex lg:gap-3 lg:text-[18px]"
                mode="horizontal"
                items={[
                  ...publicSidebarGenerator(userPaths),
                  {
                    key: "Dashbooard",

                    label: (
                      <NavLink to={`${isAuthenticated?.role}/dashboard`}>
                        Dashboard
                      </NavLink>
                    ),
                  },
                ]}
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
                style={{ background: "transparent" }}
                className="mt-12"
                key={placement}
              >
                <Menu
                  className=""
                  mode="vertical"
                  items={publicSidebarGenerator(userPaths)}
                />
              </Drawer>
            </div>

            <div className="flex gap-3">
              {!isAuthenticated ? (
                <>
                  <Button className="hidden md:block" type="default" danger>
                    <NavLink to="/login">Login</NavLink>
                  </Button>
                  <Button
                    type="primary"
                    className="bg-[#F2A922] hidden md:block"
                  >
                    <NavLink to="/register">Register</NavLink>
                  </Button>
                </>
              ) : (
                <Button
                  type="default"
                  danger
                  className="hidden md:block"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
