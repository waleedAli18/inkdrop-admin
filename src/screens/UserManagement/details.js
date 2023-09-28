import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Pagination } from "antd";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import DesignCardComponent from "../../components/customComponents/CustomDesignCard";
import CustomDashboardStatistic from "../../components/customComponents/CustomDashboardCard/CustomDashboardStatistic";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomStatusBox from "../../components/customComponents/CustomStatusBox";
import CustomModal from "../../components/uiComponents/CustomModal";
import DesignModal from "../../components/customComponents/DesignModal";
// import { PaginationDataProps } from "../../utils/interface";
import "./UserManagement.less";
// const paginationData: PaginationDataProps = {
//   page: 1,
//   take: pageSize,
// };
const UserManagementDetails = () => {
    const location = useLocation();
    const userData = location?.state;
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState();
    // const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
    // const [dataArray, setDataArray] = useState(UserManagementTableData);
    // const [pagination, setPagination] =
    //   useState<PaginationDataProps>(paginationData);
    // const onFinishSearch = async (value: any) => {
    //   console.log("object", value);
    // };
    const handleModalClose = () => {
        if (openModal) {
            setOpenModal(false);
        }
    };
    const [currentPage, setCurrentPage] = useState(1);
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedDesigns = userData?.designs?.slice(startIndex, endIndex);
    return (_jsxs("div", { className: "userManagement-details", children: [_jsx(CustomRow, { children: _jsx(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: _jsx(Breadcrumbs, { Title: "Back", BackBtn: true, search: false }) }) }), _jsx("div", { className: "box-wrapper p-3", children: _jsxs(CustomRow, { className: "mt-3", children: [_jsx(CustomColumn, { xl: 12, sm: 24, xs: 24, className: "top left", children: _jsxs(CustomRow, { className: "left", children: [_jsxs(CustomColumn, { xl: 10, sm: 24, xs: 24, children: [_jsx("div", { className: "img", children: _jsx("img", { src: userData?.userImage, alt: "User" }) }), _jsx("h2", { children: userData?.username })] }), _jsx(CustomColumn, { xl: 14, sm: 24, xs: 24, children: _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("span", { children: "Email" }), _jsx("h4", { children: userData?.email })] }), _jsxs("li", { children: [_jsx("span", { children: "Phone" }), _jsx("h4", { children: userData?.phone })] }), _jsxs("li", { children: [_jsx("span", { children: "Address" }), _jsx("h4", { children: userData?.address })] }), _jsxs("li", { children: [_jsx("span", { children: "OnBoarding Date" }), _jsx("h4", { children: userData?.onboardingDate })] })] }) })] }) }), _jsx(CustomColumn, { xl: 12, sm: 24, xs: 24, className: "top right", children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 24, sm: 24, xs: 24, children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 15, lg: 15, sm: 12, xs: 12, children: _jsxs("div", { className: "pending-amount", children: [_jsx("h4", { children: "Pending Amount" }), _jsxs("h2", { children: ["$", userData?.pendingAmount] })] }) }), _jsx(CustomColumn, { xl: 9, lg: 9, sm: 12, xs: 12, children: _jsx("div", { className: "text-right", children: _jsx(CustomStatusBox, { text: "Active" }) }) })] }) }), _jsx(CustomColumn, { xl: 24, sm: 24, xs: 24, children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(CustomDashboardStatistic, { prefix: _jsx(_Fragment, { children: _jsx(CustomHeading, { children: userData?.totalDesigns }) }), value: `Total Design` }) }), _jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(CustomDashboardStatistic, { prefix: _jsx(_Fragment, { children: _jsx(CustomHeading, { children: userData?.totalProducts }) }), value: `Total Products` }) }), _jsx(CustomColumn, { xl: 8, lg: 8, md: 24, sm: 24, xs: 24, children: _jsx(CustomDashboardStatistic, { prefix: _jsx(_Fragment, { children: _jsxs(CustomHeading, { children: ["$", userData?.totalEarnings] }) }), value: `Total Earnings` }) })] }) })] }) }), _jsxs(CustomColumn, { xl: 24, sm: 24, xs: 24, children: [_jsx("div", { className: "designCardWrapper", children: displayedDesigns?.map((cardItem, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(DesignCardComponent, { data: cardItem, handleClick: () => {
                                                setModalData(cardItem);
                                                setOpenModal(true);
                                            } }, cardItem?.id) }, cardItem?.id))) }), _jsx("div", { className: "text-right mt-4", children: _jsx(Pagination, { current: currentPage, pageSize: pageSize, total: userData?.designs?.length, onChange: handleChangePage }) })] })] }) }), _jsx(CustomModal, { open: openModal, centered: true, closable: true, onCancel: handleModalClose, width: "1250px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx(DesignModal, { artCardData: [modalData], associatedProductData: userData?.associate, designId: userData?.id, artAcceptDeclineButtons: false, associateAcceptHandle: () => console.log("Accepted"), associateDeclineHandle: () => console.log("Declined"), artAcceptHandle: () => console.log("Accepted"), artDeclineHandle: () => console.log("Declined") }) }) })] }));
};
export default UserManagementDetails;
