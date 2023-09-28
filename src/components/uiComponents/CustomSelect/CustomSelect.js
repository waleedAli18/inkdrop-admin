import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from "antd";
import { memo } from "react";
import "./CustomSelect.less";
const CustomSelect = (props) => {
    const { type, className } = props;
    let customClass = "";
    switch (type) {
        case "small":
            customClass = "small-dropdown";
            break;
        default:
            break;
    }
    return (_jsx("span", { className: "kl-custom-select-container", children: _jsx(Select, { ...props, className: `${customClass} ${className}`, getPopupContainer: (trigger) => trigger.parentNode }) }));
};
export default memo(CustomSelect);
