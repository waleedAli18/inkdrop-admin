import { memo, useEffect, useRef, useState } from "react";
import { Pagination } from "antd";
import { motion } from "framer-motion";
import NotificationIcons from "../../../assets/all-gts-svg-files/notification";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomModal from "../../uiComponents/CustomModal";
import "./CustomNotification.less";

export interface NotificationList {
  id: number;
  image: string;
  text: string;
  day: string;
  time: string;
}
interface NotificationProps {
  count: number;
  page: number;
  setPage: Function;
  pagination: any;
  loading: boolean;
  setLoading: Function;
  onChangeNotificationEnable: Function;
  notificationEnabled: boolean;
  notificationList?: NotificationList[];
}

const CustomNotification = (props: NotificationProps) => {
  const {
    count,
    page,
    setPage,
    pagination,
    // loading,
    setLoading,
    // onChangeNotificationEnable,
    // notificationEnabled,
    notificationList,
  } = props;

  const [openNotification, setOpenNotification] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenNotification(false);
    }
  };

  const handleModalClose = () => {
    if (openNotification) {
      setOpenNotification(!openNotification);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setLoading(true);
  };

  const startIndex = (page - 1) * pagination.take;
  const endIndex = page * pagination.take;
  const displayedNotificationList =
    notificationList?.slice(startIndex, endIndex) || [];

  return (
    <>
      <div className="notification-sec">
        <a
          onClick={(e) => {
            e.preventDefault();
            setOpenNotification(!openNotification);
          }}
          style={{ display: "flex" }}
        >
          <NotificationIcons />
          {count !== 0 && (
            <span className="gx-d-flex gx-justify-content-center gx-align-items-center notification-count-sec">
              {count}
            </span>
          )}
        </a>

        <CustomModal
          open={openNotification}
          centered
          closable={true}
          onCancel={handleModalClose}
          width="70%"
          style={{ borderRadius: 12, overflow: "hidden" }}
          footer={null}
        >
          <>
            <div className="notificationModalWrapper">
              <CustomColumn xl={24} lg={24} md={24} sm={24}>
                <div className="authScreen">
                  <div className="head">
                    <h2>Notifications</h2>
                  </div>
                  {displayedNotificationList && (
                    <>
                      <ul className="notification-list">
                        {displayedNotificationList.map((list, index) => (
                          <motion.li
                            key={list.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                          >
                            <div className="img">
                              <img src={list.image} alt="User" />
                            </div>
                            <div className="text-wrapper">
                              <p>{list.text}</p>
                              <span>
                                {list.day} {list.time}
                              </span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="pagination-wrapper">
                        <Pagination
                          current={page}
                          pageSize={pagination.take}
                          total={pagination.totalCount}
                          onChange={handlePageChange}
                          className="text-right"
                        />
                      </div>
                    </>
                  )}
                </div>
              </CustomColumn>
            </div>
          </>
        </CustomModal>
      </div>
    </>
  );
};

export default memo(CustomNotification);
