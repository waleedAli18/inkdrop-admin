import { jsx as _jsx } from "react/jsx-runtime";
import { Row } from "antd";
import { memo } from "react";
import "./custom-row.less";
const CustomRow = (props) => {
    return (_jsx(Row, { ...props, className: `custom-row ${props.className}`, children: props.children }));
};
export default memo(CustomRow);
