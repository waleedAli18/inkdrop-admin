import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from "antd";
import { memo } from "react";
import "./CustomTextarea.less";
const CustomTextarea = (props) => {
    const { TextArea } = Input;
    return (_jsx("span", { className: "custom-textarea-container", children: _jsx(TextArea, { ...props }) }));
};
export default memo(CustomTextarea);
