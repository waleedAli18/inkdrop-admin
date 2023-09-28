import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import CustomForm from "../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
const FormItem = Form.Item;
function OTP(props) {
    const [otp, setOtp] = useState("");
    const [counter, setCounter] = React.useState(30);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    return (_jsx("div", { className: "gx-app-login-main-content", children: _jsx("div", { className: "gx-app-login-content", children: _jsxs(CustomForm, { initialValues: { remember: true }, name: "basic", className: "gx-signin-form gx-form-row0", children: [_jsx("div", { className: "resend-wrapper", children: _jsx(OTPInput, { value: otp, inputType: "number", onChange: setOtp, numInputs: 4, shouldAutoFocus: true, renderInput: (props) => _jsx(Input, { ...props }) }) }), _jsxs(FormItem, { children: [_jsx(CustomButton, { type: "primary", className: "gx-mb-0 btn default-btn", htmlType: "submit", disabled: otp?.length < 4, onClick: () => props.onSubmit(otp), loading: props.loading, children: "Verify" }), props.otpResendLogin && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "text-center forgot-pass", children: ["Didn\u2019t Receive Yet ?", " ", _jsxs(Button, { type: "primary", disabled: counter >= 1 ? true : false, htmlType: "submit", loading: props.otpLoading, onClick: () => {
                                                    if (counter >= 1) {
                                                    }
                                                    else {
                                                        props.resendOTP();
                                                        setCounter(30);
                                                    }
                                                }, className: "resendCounter", children: [" ", counter >= 1
                                                        ? `Resend in ${counter} seconds`
                                                        : "Resend Now"] })] }), _jsx("p", { className: "already-have-account", children: _jsx(Link, { to: "/", children: "Back to Login" }) })] }))] })] }) }) }));
}
export default OTP;
