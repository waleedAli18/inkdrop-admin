import { memo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { Layout, Switch, Dropdown, Space, Skeleton, notification } from "antd";
import CustomNotification from "../../components/customComponents/CustomNotification";
import profileImg from "../../assets/images/testi-2.jpg";
import {
  faPowerOff,
  faBell,
  faLock,
  faBank,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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

interface NotificationEnableProps {
  notificationEnabled: boolean;
}

const TopHeader = () => {
  // const { confirm } = Modal;
  const controls = useAnimation();
  const [isShaking, setIsShaking] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  // const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [checked, setChecked] = useState<boolean>(true);

  const [changePasswordModal, setChangePasswordModal] =
    useState<boolean>(false);
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);

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

  const toggleRef = useRef<HTMLDivElement | null>(null);
  const onChange = (checked: boolean) => {};

  const handleClickOutside = (event: Event) => {
    if (
      toggleRef.current &&
      !toggleRef.current.contains(event.target as Node)
    ) {
      // close toggle if clicked outside
      setNotificationToggle(false);
    }
  };

  const handleSwitchChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  const items = [
    {
      label: (
        <Link to={`#`}>
          <span>
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </span>

          <CustomSwitch
            onChange={handleSwitchChange}
            checked={checked}
          ></CustomSwitch>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="#" onClick={() => handleModalOpen()}>
          <span>
            <FontAwesomeIcon icon={faLock} />
            Change Password
          </span>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link
          to={`${AUTHENTICATED_ROUTES.PAYOUT_MANAGEMENT}`}
          state={{ dropBankDetails: true }}
        >
          <span>
            <FontAwesomeIcon icon={faBank} />
            Bank Details
          </span>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link to="#" onClick={() => setEditProfileModal(true)}>
          <span>
            <FontAwesomeIcon icon={faUser} />
            My Profile
          </span>
        </Link>
      ),
      key: "4",
    },
  ];

  const onChangeNotificationEnable = (value: NotificationEnableProps) => {
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

  return (
    <>
      <Header className="gx-pr-0 topbar-sec">
        <div className="user-profile gx-d-flex gx-align-items-center gx-justify-content-center gx-position-relative">
          <motion.div
            animate={controls}
            onHoverStart={shake} // Trigger the shake animation on hover
          >
            <CustomNotification
              count={NOTIFICATION_LIST.length}
              setPage={setPage}
              page={page}
              pagination={pagination}
              loading={loading}
              setLoading={setLoading}
              onChangeNotificationEnable={onChangeNotificationEnable}
              notificationEnabled={enabled}
              notificationList={NOTIFICATION_LIST}
            />
          </motion.div>
          <div
            className={`user-profile__profile-detail ${
              profileToggle ? "active" : ""
            }`}
          >
            <Skeleton loading={false} active paragraph={{ rows: 1 }}>
              <Dropdown
                menu={{
                  items,
                }}
                overlayClassName="profile-dropdown"
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div className="user-profile__user">
                      <img src={profileImg} className="profile Image" />
                    </div>
                  </Space>
                </a>
              </Dropdown>
            </Skeleton>
          </div>

          <div
            className={`user-profile__notification__dropdown notifications ${
              notificationToggle ? "active" : ""
            }`}
          >
            <div className="head">
              <CustomHeading className="sec-title">Notifications</CustomHeading>
              <div className="switch-toggle">
                <Switch onChange={onChange} />
              </div>
            </div>

            <ul className="notification-list">
              <li>
                <Link to="/">
                  You just receive a job <span>Just Now</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  New user registered <span>59 minutes ago</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  You have a New Order From Alex <span>12 hours ago</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  You have a New Order From adian <span>Today, 11:59 AM</span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`user-profile__notification__dropdown ${
              profileToggle ? "active" : ""
            }`}
          >
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/help-support">Help & Support</Link>
              </li>
              <li>
                <Link to="/terms-condition">Terms & Conditions</Link>
              </li>
              <li className="logout">
                <Link to="/login">
                  <FontAwesomeIcon icon={faPowerOff} /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Header>

      {/* Modal (Change Password) */}
      <CustomModal
        open={changePasswordModal}
        centered
        closable={true}
        onCancel={handleModalClose}
        width="670px"
        style={{ borderRadius: 12, overflow: "hidden" }}
        footer={null}
      >
        <>
          <div className="authModalWrapper">
            <ResetPassword
              userEmail={"admin@inkdrop.com"}
              resetButtonText="Update"
            />
          </div>
        </>
      </CustomModal>

      {/* Modal (Edit Profile) */}
      <CustomModal
        open={editProfileModal}
        centered
        closable={true}
        onCancel={handleModalClose}
        width="1000px"
        style={{ borderRadius: 12, overflow: "hidden" }}
        footer={null}
      >
        <>
          <MyProfile />
        </>
      </CustomModal>
    </>
  );
};

export default memo(TopHeader);
