import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout } from "antd";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Topheader from "./topheader";
import { Suspense } from "react";
import FullScreenLoader from "../components/customComponents/FullScreenLoader";
import ScrollProgressBar from "../components/customComponents/ScrollProgress";
const { Content } = Layout;
function MainLayout() {
    const sideBarCollapsed = (collapsed) => {
        const layout = document.getElementById("main-layout-sec");
        if (collapsed) {
            layout?.classList.add("hide");
            return;
        }
        layout?.classList.remove("hide");
    };
    return (_jsx("div", { className: "layout-sec", children: _jsxs(Layout, { children: [_jsx(Sidebar, { sideBarCollapsed: sideBarCollapsed }), _jsxs(Layout, { id: "main-layout-sec", children: [_jsx(motion.div, { layout: true, initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, transition: {
                                type: "spring",
                                delay: 0.05,
                            }, children: _jsx(Topheader, {}) }), _jsx(ScrollProgressBar, {}), _jsx(Content, { className: "main-content-wrapper", id: "main-content-wrapper", children: _jsx(Suspense, { fallback: _jsx(FullScreenLoader, {}), children: _jsx(Outlet, {}) }) })] })] }) }));
}
export default MainLayout;
