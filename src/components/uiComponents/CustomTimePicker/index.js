import { jsx as _jsx } from "react/jsx-runtime";
import { TimePicker } from "antd";
import { memo } from "react";
import "./CustomTimePicker.less";
const CustomTimePicker = (props) => {
    return (_jsx("span", { className: "custom-timepicker", children: _jsx(TimePicker, { ...props, getPopupContainer: (trigger) => trigger.parentNode }) }));
};
export default memo(CustomTimePicker);
