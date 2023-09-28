import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "antd";
import { memo } from "react"; // Make sure to import ChangeEvent
import "./CustomCheckboxGroup.less";
const CheckboxGroup = Checkbox.Group;
const CustomCheckboxGroup = (props) => {
    const { onChange, ...restProps } = props;
    return (_jsx("div", { children: _jsx(CheckboxGroup, { ...restProps, onChange: onChange }) }));
};
export default memo(CustomCheckboxGroup);
