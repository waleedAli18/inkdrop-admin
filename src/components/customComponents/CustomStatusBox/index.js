import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { STATUS_CONSTANTS } from "../../../utils/constants/app.constant";
import "./CustomStatusBox.less";
const CustomStatusBox = (props) => {
    return (_jsx("span", { className: `custom-status-box ${props.text?.toLowerCase()}`, children: STATUS_CONSTANTS[props.text] }));
};
export default memo(CustomStatusBox);
