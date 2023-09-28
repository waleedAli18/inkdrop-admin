import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const CustomPhoneInput = (props) => {
    return (_jsx("span", { className: "kl-custom-input-container", children: _jsx(PhoneInput, { ...props }) }));
};
export default memo(CustomPhoneInput);
