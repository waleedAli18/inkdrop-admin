import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import { AUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import { DashboardTableData } from "../../utils/data/dashboard.data";
import CustomDashboardStatistic from "../../components/customComponents/CustomDashboardCard/CustomDashboardStatistic";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import cardImage1 from "../../assets/images/circle-users.png";
import cardImage2 from "../../assets/images/circle-brush.png";
import cardImage3 from "../../assets/images/circle-products.png";
import DesignModal from "../../components/customComponents/DesignModal";
import CustomModal from "../../components/uiComponents/CustomModal";
import "./Dashboard.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const Dashboard = () => {
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [pagination, setPagination] = useState(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const columns = [
        {
            title: "S.No",
            key: "id",
            render: (res) => `${res?.id}`,
        },
        {
            title: "Designer",
            key: "designer",
            render: (res) => `${res?.designer}`,
        },
        {
            title: "Design Title",
            key: "designTitle",
            render: (res) => `${res?.designTitle}`,
        },
        {
            title: "Submission Date",
            key: "submissionDate",
            render: (res) => `${res?.submissionDate}`,
        },
        {
            title: "Total Products",
            key: "totalProducts",
            render: (res) => `${res?.totalProducts}`,
        },
        {
            title: "Action",
            width: "15%",
            key: "action",
            className: "action-col",
            render: (res) => (_jsx(CustomButton, { htmlType: "button", className: "action-btn small whiteBtn", onClick: () => {
                    setModalData(res), setOpenModal(true);
                }, children: "View Details" })),
        },
    ];
    const contentView = (_jsx(CustomTable, { bordered: true, data: DashboardTableData, columns: columns, loading: gridPreLoader, pagination: pagination }));
    const handleModalClose = () => {
        if (openModal) {
            setOpenModal(false);
        }
    };
    return (_jsxs("div", { className: "dashboard-screen table-screen", children: [_jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(AnimatePresence, { children: _jsx(motion.div, { layout: true, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: {
                                    type: "spring",
                                }, children: _jsx(CustomDashboardStatistic, { prefix: _jsxs(_Fragment, { children: [_jsx("img", { src: cardImage1, alt: "Users" }), _jsx(CustomHeading, { children: "Total Users" })] }), value: `58` }) }) }) }), _jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(AnimatePresence, { children: _jsx(motion.div, { layout: true, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: {
                                    type: "spring",
                                }, children: _jsx(CustomDashboardStatistic, { prefix: _jsxs(_Fragment, { children: [_jsx("img", { src: cardImage2, alt: "Art Works" }), _jsx(CustomHeading, { children: "Total Art Works" })] }), value: `26` }) }) }) }), _jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(AnimatePresence, { children: _jsx(motion.div, { layout: true, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: {
                                    type: "spring",
                                }, children: _jsx(CustomDashboardStatistic, { prefix: _jsxs(_Fragment, { children: [_jsx("img", { src: cardImage3, alt: "Products" }), _jsx(CustomHeading, { children: "Total Products" })] }), value: `510` }) }) }) })] }), _jsx(CustomRow, { children: _jsxs(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: [_jsx(Breadcrumbs, { Title: "New Designs Listing" }), _jsxs("div", { className: "box-wrapper", children: [_jsx(CustomGridView, { content: contentView }), _jsx("div", { className: "text-center mb-4", children: _jsx(Link, { to: `/${AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT}`, className: "link", children: "View More" }) })] })] }) }), _jsx(CustomModal, { open: openModal, centered: true, closable: true, onCancel: handleModalClose, width: "1250px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx(DesignModal, { artCardData: modalData?.designs, associatedProductData: modalData?.associate, designId: modalData?.id, artAcceptDeclineButtons: true, associateAcceptHandle: () => console.log("Accepted"), associateDeclineHandle: () => console.log("Declined"), artAcceptHandle: () => message.success({
                            content: `Art Accepted!`,
                            duration: 3,
                        }), artDeclineHandle: () => message.info({
                            content: `Art Declined!`,
                            duration: 3,
                        }) }) }) })] }));
};
export default Dashboard;
