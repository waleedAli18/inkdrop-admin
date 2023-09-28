import { useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import { PaginationDataProps } from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import { AUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import { DashboardData } from "../../utils/interface/screens/dashboardData.interface";
import { DashboardTableData } from "../../utils/data/dashboard.data";
import CustomDashboardStatistic from "../../components/customComponents/CustomDashboardCard/CustomDashboardStatistic";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import cardImage1 from "../../assets/images/circle-users.png";
import cardImage2 from "../../assets/images/circle-brush.png";
import cardImage3 from "../../assets/images/circle-products.png";
import DesignModal from "../../components/customComponents/DesignModal";
import CustomModal from "../../components/uiComponents/CustomModal";
import "./Dashboard.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const Dashboard = () => {
  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>();
  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  // const onFinishSearch = async (value: any) => {
  //   console.log("object", value);
  // };

  const columns = [
    {
      title: "S.No",
      key: "id",
      render: (res: DashboardData) => `${res?.id}`,
    },
    {
      title: "Designer",
      key: "designer",
      render: (res: DashboardData) => `${res?.designer}`,
    },
    {
      title: "Design Title",
      key: "designTitle",
      render: (res: DashboardData) => `${res?.designTitle}`,
    },
    {
      title: "Submission Date",
      key: "submissionDate",
      render: (res: DashboardData) => `${res?.submissionDate}`,
    },
    {
      title: "Total Products",
      key: "totalProducts",
      render: (res: DashboardData) => `${res?.totalProducts}`,
    },
    {
      title: "Action",
      width: "15%",
      key: "action",
      className: "action-col",
      render: (res: DashboardData) => (
        <CustomButton
          htmlType="button"
          className="action-btn small whiteBtn"
          onClick={() => {
            setModalData(res), setOpenModal(true);
          }}
        >
          View Details
        </CustomButton>
      ),
    },
  ];

  const contentView = (
    <CustomTable
      bordered
      data={DashboardTableData}
      columns={columns}
      loading={gridPreLoader}
      pagination={pagination}
    />
  );

  const handleModalClose = () => {
    if (openModal) {
      setOpenModal(false);
    }
  };

  return (
    <div className="dashboard-screen table-screen">
      <CustomRow>
        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <img src={cardImage1} alt="Users" />
                    <CustomHeading>Total Users</CustomHeading>
                  </>
                }
                value={`58`}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>

        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <img src={cardImage2} alt="Art Works" />
                    <CustomHeading>Total Art Works</CustomHeading>
                  </>
                }
                value={`26`}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>

        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <img src={cardImage3} alt="Products" />
                    <CustomHeading>Total Products</CustomHeading>
                  </>
                }
                value={`510`}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn lg={24} md={24} sm={24} xs={24}>
          <Breadcrumbs Title="New Designs Listing" />
          <div className="box-wrapper">
            <CustomGridView
              content={contentView}
              // leftHeader={}
            />
            <div className="text-center mb-4">
              <Link
                to={`/${AUTHENTICATED_ROUTES.PRODUCT_MANAGEMENT}`}
                className="link"
              >
                View More
              </Link>
            </div>
          </div>
        </CustomColumn>
      </CustomRow>

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
            artCardData={modalData?.designs}
            associatedProductData={modalData?.associate}
            designId={modalData?.id}
            artAcceptDeclineButtons={true}
            associateAcceptHandle={() => console.log("Accepted")}
            associateDeclineHandle={() => console.log("Declined")}
            artAcceptHandle={() =>
              message.success({
                content: `Art Accepted!`,
                duration: 3,
              })
            }
            artDeclineHandle={() =>
              message.info({
                content: `Art Declined!`,
                duration: 3,
              })
            }
          />
        </>
      </CustomModal>
    </div>
  );
};

export default Dashboard;
