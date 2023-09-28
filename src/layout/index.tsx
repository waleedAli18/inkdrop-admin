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
  const sideBarCollapsed = (collapsed: boolean) => {
    const layout: HTMLElement = document.getElementById("main-layout-sec")!;
    if (collapsed) {
      layout?.classList.add("hide");
      return;
    }
    layout?.classList.remove("hide");
  };
  return (
    <div className="layout-sec">
      <Layout>
        <Sidebar sideBarCollapsed={sideBarCollapsed} />
        <Layout id="main-layout-sec">
          <motion.div
            layout
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              type: "spring",
              delay: 0.05,
            }}
          >
            <Topheader />
          </motion.div>

          <ScrollProgressBar />

          <Content className="main-content-wrapper" id="main-content-wrapper">
            <Suspense fallback={<FullScreenLoader />}>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
