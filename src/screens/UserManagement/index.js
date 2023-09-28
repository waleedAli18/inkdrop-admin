import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageSize } from "../../utils/constants/app.constant";
import Breadcrumbs from "../../components/customComponents/Breadcrumbs/Breadcrumbs";
import CustomTable from "../../components/customComponents/CustomTable/CustomTable";
import CustomGridView from "../../components/customComponents/CustomGridView";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import { AUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import { UserManagementTableData } from "../../utils/data/user-management.data";
import CustomSwitch from "../../components/uiComponents/CustomSwitch/CustomSwitch";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import helperFunction from "../../helpers/functions.helper";
import "./UserManagement.less";
const paginationData = {
    page: 1,
    take: pageSize,
};
const UserManagement = () => {
    const navigate = useNavigate();
    const [gridPreLoader, setGridPreLoader] = useState(false);
    const [dataArray, setDataArray] = useState(UserManagementTableData);
    const [pagination, setPagination] = useState(paginationData);
    const columns = [
        {
            title: "S.No",
            key: "id",
            width: 90,
            render: (res) => `${res?.id}`,
        },
        {
            title: "Username",
            key: "username",
            render: (res) => `${res?.username}`,
        },
        {
            title: "Email",
            key: "email",
            render: (res) => `${res?.email}`,
        },
        {
            title: "Total Designs",
            key: "totalDesigns",
            width: 130,
            render: (res) => `${res?.totalDesigns}`,
        },
        {
            title: "Onboarding Date",
            key: "onboardingDate",
            render: (res) => `${res?.onboardingDate}`,
        },
        {
            title: "Total Earnings",
            key: "totalEarnings",
            width: 130,
            render: (res) => `$${res?.totalEarnings}`,
        },
        {
            title: "Status",
            key: "status",
            render: (res, index) => (_jsxs("div", { className: "switchWrapper", children: [_jsx("p", { className: "inActive", children: "In-Active" }), _jsx(CustomSwitch, { checked: res.status, onChange: (e) => {
                            const newDataArray = [...dataArray];
                            newDataArray[index].status = e;
                            setDataArray(newDataArray);
                        } }), _jsx("p", { className: "active", children: "Active" })] })),
        },
        {
            title: "Action",
            key: "action",
            className: "action-col",
            render: (res) => (_jsx(CustomButton, { htmlType: "button", className: "action-btn small whiteBtn", onClick: () => navigate(`${AUTHENTICATED_ROUTES.USER_MANAGEMENT_DETAILS}/${res?.id}`, { state: res }), children: "View Details" })),
        },
    ];
    const rightHeader = (_jsxs(_Fragment, { children: [_jsx(CustomDatePicker, { placeholder: "Start Date", disabledDate: helperFunction.disabledFutureDate }), _jsx(CustomDatePicker, { placeholder: "End Date", disabledDate: helperFunction.disabledFutureDate })] }));
    const contentView = (_jsx(CustomTable, { bordered: true, data: UserManagementTableData, columns: columns, loading: gridPreLoader, pagination: pagination, scroll: { x: 1400 } }));
    return (_jsx("div", { className: "userManagement-screen table-screen", children: _jsx(CustomRow, { children: _jsxs(CustomColumn, { lg: 24, md: 24, sm: 24, xs: 24, children: [_jsx(Breadcrumbs, { Title: "User Management", search: true }), _jsx(CustomGridView, { content: contentView, rightHeader: rightHeader })] }) }) }));
};
export default UserManagement;
