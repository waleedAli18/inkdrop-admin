import { Layout, Menu, Modal } from "antd";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/images/dashboard-logo.png";
import logoFaded from "../../assets/images/logo-faded.png";
import {
  AUTHENTICATED_ROUTES,
  AllMenusItems,
} from "../../utils/constants/routes.constant";
import { getMenu } from "../../helpers";
import LogoutIcon from "../../assets/all-gts-svg-files/logouticon";
import "./sidebar.less";

interface SideCollapsedProps {
  sideBarCollapsed: (collapsed: boolean, type: string) => void;
}
interface SideCollapsedProps {
  sideBarCollapsed: (collapsed: boolean, type: string) => void;
}

const Sidebar = ({ sideBarCollapsed }: SideCollapsedProps) => {
  const { Sider } = Layout;
  const { confirm } = Modal;
  const navigate = useNavigate();
  const [route, setRoute] = useState<string>("");
  const location = useLocation();

  const setRouteOnClick = () => {
    let pathname = window.location.pathname;
    let selectedKeys = pathname.substr(1);
    let routeArray = selectedKeys.split("/");
    let defaultOpenKeys: string =
      routeArray?.[0] === "" ? AUTHENTICATED_ROUTES.DASHBOARD : routeArray?.[0];
    setRoute(defaultOpenKeys);
  };
  useEffect(() => {
    setRouteOnClick();
  }, [location]);

  const showPromiseConfirmLogout = () => {
    confirm({
      title: `Logout?`,
      width: "455px",
      className: "logout-modal",
      icon: (
        <div className="icon-wrapper">
          <LogoutIcon />
        </div>
      ),
      content: "Are you sure you want to Logout?",
      centered: true,
      okText: "Yes",
      cancelText: "No",
      async onOk() {
        logoutCall();
      },
    });
  };

  const logoutCall = useCallback(async () => {
    navigate("/");
  }, []);

  const items = AllMenusItems.map((menu) =>
    getMenu(
      <Link
        to={menu?.linkTo}
        // onClick={() => console.log(menu.label, "Clicked")}
      >
        {menu?.icon && menu.icon}

        <span>{menu.label}</span>
      </Link>,
      menu.selectedOptionKey
    )
  );

  return (
    <motion.div
      className="sidebar-sec"
      layout
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "just",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={() => {}}
        onCollapse={(collapsed, type) => {
          sideBarCollapsed(collapsed, type);
        }}
        width="260px"
      >
        <div className="logo">
          <Link to={AUTHENTICATED_ROUTES.DASHBOARD}>
            <img src={Logo} className="dashboardLogo" />
          </Link>
        </div>
        <Menu
          theme="dark"
          className="custom-sidebar"
          mode="inline"
          defaultOpenKeys={["dashboard"]}
          selectedKeys={[route]}
          onClick={setRouteOnClick}
          items={items}
        />

        <Menu theme="dark" className="custom-sidebar" mode="inline">
          <li className="ant-menu-item ant-menu-item-only-child ">
            <span className="ant-menu-title-content">
              <Link to="#" onClick={() => showPromiseConfirmLogout()}>
                <LogoutIcon />
                <span>Logout</span>
              </Link>
            </span>
          </li>
        </Menu>
        <div className="logo-faded">
          <img src={logoFaded} />
        </div>
      </Sider>
    </motion.div>
  );
};

export default Sidebar;
