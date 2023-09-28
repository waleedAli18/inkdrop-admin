import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout, Menu, Modal } from "antd";
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/images/dashboard-logo.png";
import logoFaded from "../../assets/images/logo-faded.png";
import { AUTHENTICATED_ROUTES, AllMenusItems, } from "../../utils/constants/routes.constant";
import { getMenu } from "../../helpers";
import LogoutIcon from "../../assets/all-gts-svg-files/logouticon";
import "./sidebar.less";
const Sidebar = ({ sideBarCollapsed }) => {
    const { Sider } = Layout;
    const { confirm } = Modal;
    const navigate = useNavigate();
    const [route, setRoute] = useState("");
    const location = useLocation();
    const setRouteOnClick = () => {
        let pathname = window.location.pathname;
        let selectedKeys = pathname.substr(1);
        let routeArray = selectedKeys.split("/");
        let defaultOpenKeys = routeArray?.[0] === "" ? AUTHENTICATED_ROUTES.DASHBOARD : routeArray?.[0];
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
            icon: (_jsx("div", { className: "icon-wrapper", children: _jsx(LogoutIcon, {}) })),
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
    const items = AllMenusItems.map((menu) => getMenu(_jsxs(Link, { to: menu?.linkTo, children: [menu?.icon && menu.icon, _jsx("span", { children: menu.label })] }), menu.selectedOptionKey));
    return (_jsx(motion.div, { className: "sidebar-sec", layout: true, initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: {
            type: "just",
        }, children: _jsxs(Sider, { breakpoint: "lg", collapsedWidth: "0", onBreakpoint: () => { }, onCollapse: (collapsed, type) => {
                sideBarCollapsed(collapsed, type);
            }, width: "260px", children: [_jsx("div", { className: "logo", children: _jsx(Link, { to: AUTHENTICATED_ROUTES.DASHBOARD, children: _jsx("img", { src: Logo, className: "dashboardLogo" }) }) }), _jsx(Menu, { theme: "dark", className: "custom-sidebar", mode: "inline", defaultOpenKeys: ["dashboard"], selectedKeys: [route], onClick: setRouteOnClick, items: items }), _jsx(Menu, { theme: "dark", className: "custom-sidebar", mode: "inline", children: _jsx("li", { className: "ant-menu-item ant-menu-item-only-child ", children: _jsx("span", { className: "ant-menu-title-content", children: _jsxs(Link, { to: "#", onClick: () => showPromiseConfirmLogout(), children: [_jsx(LogoutIcon, {}), _jsx("span", { children: "Logout" })] }) }) }) }), _jsx("div", { className: "logo-faded", children: _jsx("img", { src: logoFaded }) })] }) }));
};
export default Sidebar;
