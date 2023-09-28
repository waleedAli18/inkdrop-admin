import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "antd";
import { memo } from "react"; // Make sure to import ChangeEvent
import styles from "./CustomCheckbox.module.css";
const CustomCheckbox = (props) => {
    const { onChange, ...restProps } = props;
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.checked, e);
        }
    };
    return (_jsx("div", { className: styles.checkboxWrapper, children: _jsx(Checkbox, { ...restProps, onChange: handleChange, children: props.children }) }));
};
export default memo(CustomCheckbox);
