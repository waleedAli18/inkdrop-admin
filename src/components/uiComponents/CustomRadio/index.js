import { jsx as _jsx } from "react/jsx-runtime";
import { Radio } from "antd";
import { memo } from "react";
import "./CustomRadio.less";
const CustomRadio = (props) => {
    return (_jsx("div", { className: "custom-radio-container", children: _jsx(Radio, { ...props, children: props.children }) }));
};
export default memo(CustomRadio);
