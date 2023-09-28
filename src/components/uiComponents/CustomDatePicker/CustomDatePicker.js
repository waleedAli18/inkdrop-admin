import { jsx as _jsx } from "react/jsx-runtime";
import { DatePicker } from "antd";
import { memo } from "react";
import "./CustomDatePicker.less";
const CustomDatePicker = (props) => {
    return (_jsx("span", { className: "custom-date-container", children: _jsx(DatePicker, { ...props, getPopupContainer: (trigger) => trigger.parentNode }) }));
};
export default memo(CustomDatePicker);
