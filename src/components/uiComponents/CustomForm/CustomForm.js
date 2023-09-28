import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from "antd";
import { memo } from "react";
import "./CustomForm.less";
const CustomForm = (props) => {
    return (_jsx("div", { className: "custom-form-container", children: _jsx(Form, { ...props, children: props.children }) }));
};
export default memo(CustomForm);
