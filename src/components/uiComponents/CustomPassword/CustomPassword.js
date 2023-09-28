import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "antd";
import { memo } from "react";
import "./CustomPassword.less";
const CustomPassword = (props) => {
    return (_jsx("span", { className: `kl-custom-input-container password ${props.className ? props.className : ""}`, children: _jsx(Input.Password, { autoComplete: "new-password", ...props }) }));
};
export default memo(CustomPassword);
