import { jsx as _jsx } from "react/jsx-runtime";
import { Tabs } from "antd";
import { memo } from "react";
import "./CustomTab.less";
const CustomTab = (props) => {
    return (_jsx("span", { className: "kl-custom-tab-container", children: _jsx(Tabs, { ...props, className: ` ${props.className}` }) }));
};
export default memo(CustomTab);
