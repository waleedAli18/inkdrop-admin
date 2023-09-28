import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import { Spin } from "antd";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./CustomDetailView.less";
const CustomDetailView = (props) => {
    const { breadcrumbTitle, loading, leftColumn, rightColumn, EditbtnText, EditbtnAction, DeletebtnText, DeletebtnAction, } = props;
    return (_jsxs("div", { className: "detail-management-screen detail-management table-screen", children: [_jsx(Breadcrumbs, { Title: breadcrumbTitle, BackBtn: true }), _jsx("div", { className: "detail-management-detail-sec", children: _jsxs(CustomRow, { className: "detail-view-sec", children: [_jsx(CustomColumn, { lg: 12, md: 12, sm: 24, xs: 24, className: "detail-left", children: _jsx(Spin, { spinning: loading, children: leftColumn }) }), _jsx(CustomColumn, { lg: 12, md: 12, sm: 24, xs: 24, className: "detail-right", children: _jsx(Spin, { spinning: loading, children: rightColumn }) }), _jsxs("div", { className: "detail-edit-btn detail-delete-btn", children: [EditbtnText && (_jsx(CustomButton, { type: "primary", htmlType: "button", className: "gx-mb-0 btn default-btn", onClick: EditbtnAction, children: EditbtnText })), DeletebtnText && (_jsx(CustomButton, { type: "primary", htmlType: "button", className: "gx-mb-0 btn default-btn secondary-button", onClick: DeletebtnAction, children: DeletebtnText }))] })] }) })] }));
};
export default CustomDetailView;
