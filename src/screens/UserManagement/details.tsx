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

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();
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

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const displayedDesigns = userData?.designs?.slice(startIndex, endIndex);

  return (
    <div className="userManagement-details">
      <CustomRow>
        <CustomColumn lg={24} md={24} sm={24} xs={24}>
          <Breadcrumbs Title="Back" BackBtn={true} search={false} />
        </CustomColumn>
      </CustomRow>
      <div className="box-wrapper p-3">
        <CustomRow className="mt-3">
          <CustomColumn xl={12} sm={24} xs={24} className="top left">
            <CustomRow className="left">
              <CustomColumn xl={10} sm={24} xs={24}>
                <div className="img">
                  <img src={userData?.userImage} alt="User" />
                </div>
                <h2>{userData?.username}</h2>
              </CustomColumn>
              <CustomColumn xl={14} sm={24} xs={24}>
                <ul>
                  <li>
                    <span>Email</span>
                    <h4>{userData?.email}</h4>
                  </li>
                  <li>
                    <span>Phone</span>
                    <h4>{userData?.phone}</h4>
                  </li>
                  <li>
                    <span>Address</span>
                    <h4>{userData?.address}</h4>
                  </li>
                  <li>
                    <span>OnBoarding Date</span>
                    <h4>{userData?.onboardingDate}</h4>
                  </li>
                </ul>
              </CustomColumn>
            </CustomRow>
          </CustomColumn>
          <CustomColumn xl={12} sm={24} xs={24} className="top right">
            <CustomRow>
              <CustomColumn xl={24} sm={24} xs={24}>
                <CustomRow>
                  <CustomColumn xl={15} lg={15} sm={12} xs={12}>
                    <div className="pending-amount">
                      <h4>Pending Amount</h4>
                      <h2>${userData?.pendingAmount}</h2>
                    </div>
                  </CustomColumn>
                  <CustomColumn xl={9} lg={9} sm={12} xs={12}>
                    <div className="text-right">
                      <CustomStatusBox text={"Active"} />
                    </div>
                  </CustomColumn>
                </CustomRow>
              </CustomColumn>
              <CustomColumn xl={24} sm={24} xs={24}>
                <CustomRow>
                  <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CustomDashboardStatistic
                      prefix={
                        <>
                          <CustomHeading>
                            {userData?.totalDesigns}
                          </CustomHeading>
                        </>
                      }
                      value={`Total Design`}
                    />
                  </CustomColumn>

                  <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CustomDashboardStatistic
                      prefix={
                        <>
                          <CustomHeading>
                            {userData?.totalProducts}
                          </CustomHeading>
                        </>
                      }
                      value={`Total Products`}
                    />
                  </CustomColumn>

                  <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CustomDashboardStatistic
                      prefix={
                        <>
                          <CustomHeading>
                            ${userData?.totalEarnings}
                          </CustomHeading>
                        </>
                      }
                      value={`Total Earnings`}
                    />
                  </CustomColumn>
                </CustomRow>
              </CustomColumn>
            </CustomRow>
          </CustomColumn>

          <CustomColumn xl={24} sm={24} xs={24}>
            <div className="designCardWrapper">
              {displayedDesigns?.map((cardItem: any, index: number) => (
                <motion.div
                  key={cardItem?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DesignCardComponent
                    key={cardItem?.id}
                    data={cardItem}
                    handleClick={() => {
                      setModalData(cardItem);
                      setOpenModal(true);
                    }}
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-right mt-4">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={userData?.designs?.length}
                onChange={handleChangePage}
              />
            </div>
          </CustomColumn>
        </CustomRow>
      </div>

      <CustomModal
        open={openModal}
        centered
        closable={true}
        onCancel={handleModalClose}
        width="1250px"
        style={{ borderRadius: 12, overflow: "hidden" }}
        footer={null}
      >
        <>
          <DesignModal
            artCardData={[modalData]}
            associatedProductData={userData?.associate}
            designId={userData?.id}
            artAcceptDeclineButtons={false}
            associateAcceptHandle={() => console.log("Accepted")}
            associateDeclineHandle={() => console.log("Declined")}
            artAcceptHandle={() => console.log("Accepted")}
            artDeclineHandle={() => console.log("Declined")}
          />
        </>
      </CustomModal>
    </div>
  );
};

export default UserManagementDetails;
