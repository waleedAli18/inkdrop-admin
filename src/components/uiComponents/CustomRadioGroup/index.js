import { jsx as _jsx } from "react/jsx-runtime";
import { Radio } from "antd";
import { memo } from "react";
import "./CustomRadioGroup.less";
const CustomRadioGroup = (props) => {
    return (_jsx("div", { className: "custom-radio-group-container", children: _jsx(Radio.Group, { ...props, children: props.children }) }));
};
export default memo(CustomRadioGroup);
