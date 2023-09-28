import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { Layout, Switch, Dropdown, Space, Skeleton, notification } from "antd";
import CustomNotification from "../../components/customComponents/CustomNotification";
import profileImg from "../../assets/images/testi-2.jpg";
import { faPowerOff, faBell, faLock, faBank, faUser, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import { AUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import CustomSwitch from "../../components/uiComponents/CustomSwitch/CustomSwitch";
import CustomModal from "../../components/uiComponents/CustomModal";
import ResetPassword from "../../screens/auth/reset-password";
import MyProfile from "../../components/customComponents/ProfileComponent/MyProfile";
import { NOTIFICATION_LIST } from "../../utils/data/user.data";
import "./header.less";
const { Header } = Layout;
const TopHeader = () => {
    // const { confirm } = Modal;
    const controls = useAnimation();
    const [isShaking, setIsShaking] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);
    // const [count, setCount] = useState(5);
    const [loading, setLoading] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [checked, setChecked] = useState(true);
    const [changePasswordModal, setChangePasswordModal] = useState(false);
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({
        take: 5,
        search: "",
        totalCount: NOTIFICATION_LIST?.length,
    });
    // const showPromiseConfirmLogout = () => {
    //   confirm({
    //     title: `Logout?`,
    //     width: "455px",
    //     className: "logout-modal",
    //     icon: (
    //       <div className="icon-wrapper">
    //         <LogoutIcon />
    //       </div>
    //     ),
    //     content: "Are you sure you want to Logout?",
    //     centered: true,
    //     okText: "Yes",
    //     cancelText: "No",
    //     async onOk() {
    //       logoutCall();
    //     },
    //   });
    // };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    // const logoutCall = useCallback(async () => {
    //   navigate("/");
    // }, []);
    const toggleRef = useRef(null);
    const onChange = (checked) => { };
    const handleClickOutside = (event) => {
        if (toggleRef.current &&
            !toggleRef.current.contains(event.target)) {
            // close toggle if clicked outside
            setNotificationToggle(false);
        }
    };
    const handleSwitchChange = (newChecked) => {
        setChecked(newChecked);
    };
    const items = [
        {
            label: (_jsxs(Link, { to: `#`, children: [_jsxs("span", { children: [_jsx(FontAwesomeIcon, { icon: faBell }), "Notifications"] }), _jsx(CustomSwitch, { onChange: handleSwitchChange, checked: checked })] })),
            key: "1",
        },
        {
            label: (_jsx(Link, { to: "#", onClick: () => handleModalOpen(), children: _jsxs("span", { children: [_jsx(FontAwesomeIcon, { icon: faLock }), "Change Password"] }) })),
            key: "2",
        },
        {
            label: (_jsx(Link, { to: `${AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT}`, state: { dropBankDetails: true }, children: _jsxs("span", { children: [_jsx(FontAwesomeIcon, { icon: faBank }), "Bank Details"] }) })),
            key: "3",
        },
        {
            label: (_jsx(Link, { to: "#", onClick: () => setEditProfileModal(true), children: _jsxs("span", { children: [_jsx(FontAwesomeIcon, { icon: faUser }), "My Profile"] }) })),
            key: "4",
        },
    ];
    const onChangeNotificationEnable = (value) => {
        setEnabled(value.notificationEnabled);
        notification.success({
            message: "Success",
        });
    };
    const handleModalClose = () => {
        if (changePasswordModal) {
            setChangePasswordModal(false);
        }
        if (editProfileModal) {
            setEditProfileModal(false);
        }
    };
    const handleModalOpen = () => {
        setChangePasswordModal(true);
    };
    const shake = async () => {
        if (!isShaking) {
            setIsShaking(true);
            await controls.start({
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.5 },
            });
            setIsShaking(false);
            controls.set({ rotate: 0 });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, { className: "gx-pr-0 topbar-sec", children: _jsxs("div", { className: "user-profile gx-d-flex gx-align-items-center gx-justify-content-center gx-position-relative", children: [_jsx(motion.div, { animate: controls, onHoverStart: shake, children: _jsx(CustomNotification, { count: NOTIFICATION_LIST.length, setPage: setPage, page: page, pagination: pagination, loading: loading, setLoading: setLoading, onChangeNotificationEnable: onChangeNotificationEnable, notificationEnabled: enabled, notificationList: NOTIFICATION_LIST }) }), _jsx("div", { className: `user-profile__profile-detail ${profileToggle ? "active" : ""}`, children: _jsx(Skeleton, { loading: false, active: true, paragraph: { rows: 1 }, children: _jsx(Dropdown, { menu: {
                                        items,
                                    }, overlayClassName: "profile-dropdown", trigger: ["click"], children: _jsx("a", { onClick: (e) => e.preventDefault(), children: _jsx(Space, { children: _jsx("div", { className: "user-profile__user", children: _jsx("img", { src: profileImg, className: "profile Image" }) }) }) }) }) }) }), _jsxs("div", { className: `user-profile__notification__dropdown notifications ${notificationToggle ? "active" : ""}`, children: [_jsxs("div", { className: "head", children: [_jsx(CustomHeading, { className: "sec-title", children: "Notifications" }), _jsx("div", { className: "switch-toggle", children: _jsx(Switch, { onChange: onChange }) })] }), _jsxs("ul", { className: "notification-list", children: [_jsx("li", { children: _jsxs(Link, { to: "/", children: ["You just receive a job ", _jsx("span", { children: "Just Now" })] }) }), _jsx("li", { children: _jsxs(Link, { to: "/", children: ["New user registered ", _jsx("span", { children: "59 minutes ago" })] }) }), _jsx("li", { children: _jsxs(Link, { to: "/", children: ["You have a New Order From Alex ", _jsx("span", { children: "12 hours ago" })] }) }), _jsx("li", { children: _jsxs(Link, { to: "/", children: ["You have a New Order From adian ", _jsx("span", { children: "Today, 11:59 AM" })] }) })] })] }), _jsx("div", { className: `user-profile__notification__dropdown ${profileToggle ? "active" : ""}`, children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/profile", children: "Profile" }) }), _jsx("li", { children: _jsx(Link, { to: "/about-us", children: "About Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/help-support", children: "Help & Support" }) }), _jsx("li", { children: _jsx(Link, { to: "/terms-condition", children: "Terms & Conditions" }) }), _jsx("li", { className: "logout", children: _jsxs(Link, { to: "/login", children: [_jsx(FontAwesomeIcon, { icon: faPowerOff }), " Logout"] }) })] }) })] }) }), _jsx(CustomModal, { open: changePasswordModal, centered: true, closable: true, onCancel: handleModalClose, width: "670px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx("div", { className: "authModalWrapper", children: _jsx(ResetPassword, { userEmail: "admin@inkdrop.com", resetButtonText: "Update" }) }) }) }), _jsx(CustomModal, { open: editProfileModal, centered: true, closable: true, onCancel: handleModalClose, width: "1000px", style: { borderRadius: 12, overflow: "hidden" }, footer: null, children: _jsx(_Fragment, { children: _jsx(MyProfile, {}) }) })] }));
};
export default memo(TopHeader);
