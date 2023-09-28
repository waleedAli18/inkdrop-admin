import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import { PaginationDataProps } from "../../utils/interface";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import { AUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import { UserManagementData } from "../../utils/interface/screens/userManagementData.interface";
import { UserManagementTableData } from "../../utils/data/user-management.data";
import CustomSwitch from "../../components/uiComponents/CustomSwitch/CustomSwitch";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import helperFunction from "../../helpers/functions.helper";
import "./UserManagement.less";

const paginationData: PaginationDataProps = {
  page: 1,
  take: pageSize,
};

const UserManagement = () => {
  const navigate = useNavigate();

  const [gridPreLoader, setGridPreLoader] = useState<boolean>(false);
  const [dataArray, setDataArray] = useState(UserManagementTableData);
  const [pagination, setPagination] =
    useState<PaginationDataProps>(paginationData);

  const columns = [
    {
      title: "S.No",
      key: "id",
      width: 90,
      render: (res: UserManagementData) => `${res?.id}`,
    },
    {
      title: "Username",
      key: "username",
      render: (res: UserManagementData) => `${res?.username}`,
    },
    {
      title: "Email",
      key: "email",
      render: (res: UserManagementData) => `${res?.email}`,
    },
    {
      title: "Total Designs",
      key: "totalDesigns",
      width: 130,
      render: (res: UserManagementData) => `${res?.totalDesigns}`,
    },
    {
      title: "Onboarding Date",
      key: "onboardingDate",
      render: (res: UserManagementData) => `${res?.onboardingDate}`,
    },
    {
      title: "Total Earnings",
      key: "totalEarnings",
      width: 130,
      render: (res: UserManagementData) => `$${res?.totalEarnings}`,
    },
    {
      title: "Status",
      key: "status",
      render: (res: UserManagementData, index: number) => (
        <div className="switchWrapper">
          <p className="inActive">In-Active</p>
          <CustomSwitch
            checked={res.status}
            onChange={(e) => {
              const newDataArray = [...dataArray];
              newDataArray[index].status = e;
              setDataArray(newDataArray);
            }}
          ></CustomSwitch>
          <p className="active">Active</p>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      className: "action-col",
      render: (res: UserManagementData) => (
        <CustomButton
          htmlType="button"
          className="action-btn small whiteBtn"
          onClick={() =>
            navigate(
              `${AUTHENTICATED_ROUTES.USER_MANAGEMENT_DETAILS}/${res?.id}`,
              { state: res }
            )
          }
        >
          View Details
        </CustomButton>
      ),
    },
  ];

  const rightHeader = (
    <>
      <CustomDatePicker
        placeholder="Start Date"
        disabledDate={helperFunction.disabledFutureDate}
      />
      <CustomDatePicker
        placeholder="End Date"
        disabledDate={helperFunction.disabledFutureDate}
      />
    </>
  );

  const contentView = (
    <CustomTable
      bordered
      data={UserManagementTableData}
      columns={columns}
      loading={gridPreLoader}
      pagination={pagination}
      scroll={{ x: 1400 }}
    />
  );

  return (
    <div className="userManagement-screen table-screen">
      <CustomRow>
        <CustomColumn lg={24} md={24} sm={24} xs={24}>
          <Breadcrumbs Title="User Management" search={true} />

          <CustomGridView
            content={contentView}
            rightHeader={rightHeader}
            // leftHeader={}
          />
        </CustomColumn>
      </CustomRow>
    </div>
  );
};

export default UserManagement;
