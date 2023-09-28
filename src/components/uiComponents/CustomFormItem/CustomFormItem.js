import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Form } from "antd";
import "./CustomFormItem.less";
const CustomFormItem = (props) => {
    return (_jsx("div", { className: `custom-form-item ${props.className ? props.className : ""}`, children: _jsx(Form.Item, { ...props, children: props.children }) }));
};
export default memo(CustomFormItem);
