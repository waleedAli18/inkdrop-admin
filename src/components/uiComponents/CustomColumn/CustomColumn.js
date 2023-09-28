import { jsx as _jsx } from "react/jsx-runtime";
import { Col } from "antd";
import { memo } from "react";
const CustomColumn = (props) => {
    return (_jsx(Col, { ...props, className: `custom-column ${props.className}`, children: props.children }));
};
export default memo(CustomColumn);
