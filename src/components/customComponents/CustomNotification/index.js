import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState } from "react";
import { Pagination } from "antd";
import { motion } from "framer-motion";
import NotificationIcons from "../../../assets/all-gts-svg-files/notification";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomModal from "../../uiComponents/CustomModal";
import "./CustomNotification.less";
const CustomNotification = (props) => {
    const { count, page, setPage, pagination, 
    // loading,
    setLoading, 
    // onChangeNotificationEnable,
    // notificationEnabled,
    notificationList, } = props;
    const [openNotification, setOpenNotification] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    const handleOutsideClick = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setOpenNotification(false);
        }
    };
    const handleModalClose = () => {
        if (openNotification) {
            setOpenNotification(!openNotification);
        }
    };
    const handlePageChange = (newPage) => {
        setPage(newPage);
        setLoading(true);
    };
    const startIndex = (page - 1) * pagination.take;
    const endIndex = page * pagination.take;
    const displayedNotificationList = notificationList?.slice(startIndex, endIndex) || [];
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "notification-sec", children: [_jsxs("a", { onClick: (e) => {
                        e.preventDefault();
                        setOpenNotification(!openNotification);
                    }, style: { display: "flex" }, children: [_jsx(NotificationIcons, {}), count !== 0 && (_jsx("span", { className: "gx-d-flex gx-justify-content-center gx-align-items-center notification-count-sec", children: count }))] }), _jsx(CustomModal, { open: openNotification, centered: true, closable: true, onCancel: handleModalClose, width: "70%", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx("div", { className: "notificationModalWrapper", children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, children: _jsxs("div", { className: "authScreen", children: [_jsx("div", { className: "head", children: _jsx("h2", { children: "Notifications" }) }), displayedNotificationList && (_jsxs(_Fragment, { children: [_jsx("ul", { className: "notification-list", children: displayedNotificationList.map((list, index) => (_jsxs(motion.li, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.15 }, children: [_jsx("div", { className: "img", children: _jsx("img", { src: list.image, alt: "User" }) }), _jsxs("div", { className: "text-wrapper", children: [_jsx("p", { children: list.text }), _jsxs("span", { children: [list.day, " ", list.time] })] })] }, list.id))) }), _jsx("div", { className: "pagination-wrapper", children: _jsx(Pagination, { current: page, pageSize: pagination.take, total: pagination.totalCount, onChange: handlePageChange, className: "text-right" }) })] }))] }) }) }) }) })] }) }));
};
export default memo(CustomNotification);
