import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Switch } from "antd";
import "./CustomSwitch.less";
const CustomSwitch = (props) => {
    return (_jsx(Switch, { ...props, className: `${props.className ? props.className : ""} gx-mb-0 switchStyling` }));
};
export default memo(CustomSwitch);
