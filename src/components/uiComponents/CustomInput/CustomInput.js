import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "antd";
import { memo } from "react";
import "./CustomInput.less";
const CustomInput = (props) => {
    return (_jsx("span", { className: "kl-custom-input-container", children: _jsx(Input, { autoComplete: "off", ...props }) }));
};
export default memo(CustomInput);
