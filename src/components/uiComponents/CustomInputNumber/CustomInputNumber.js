import { jsx as _jsx } from "react/jsx-runtime";
import { InputNumber } from "antd";
import { memo } from "react";
import "./CustomInputNumber.less";
const CustomInputNumber = (props) => {
    return (_jsx("span", { className: "kl-custom-input-container kl-custom-input-num-container", children: _jsx(InputNumber, { autoComplete: "off", ...props }) }));
};
export default memo(CustomInputNumber);
