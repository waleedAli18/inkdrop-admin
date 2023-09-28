import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Form } from "antd";
import { motion } from "framer-motion";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomPassword from "../../../components/uiComponents/CustomPassword/CustomPassword";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import logo from "../../../assets/images/logo.png";
import ResetPassword from "../reset-password";
import OtpVerification from "../otp-verification";
import ForgotPassword from "../forgot-password";
import CustomModal from "../../../components/uiComponents/CustomModal";
import "../../auth/auth.less";
var AuthMode;
(function (AuthMode) {
    AuthMode["FORGOT_PASSWORD"] = "FORGOT_PASSWORD";
    AuthMode["OTP"] = "OTP";
    AuthMode["RESET_PASSWORD"] = "RESET_PASSWORD";
    AuthMode["NULL"] = "null";
})(AuthMode || (AuthMode = {}));
const Login = () => {
    const [form] = Form.useForm();
    const [authMode, setAuthMode] = useState(AuthMode.FORGOT_PASSWORD);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    // const onChange = (e: boolean) => {
    //   console.log(e);
    // };
    const onFinish = (values) => {
        console.log("values", values);
        window.location.href = "/dashboard";
    };
    const renderContent = () => {
        switch (authMode) {
            case AuthMode.FORGOT_PASSWORD:
                return (_jsx(ForgotPassword, { onOtpClick: () => setAuthMode(AuthMode.OTP), onSignInClick: () => setAuthMode(AuthMode.FORGOT_PASSWORD), setUserEmail: setUserEmail }));
            case AuthMode.OTP:
                return (_jsx(OtpVerification, { userEmail: userEmail, onResetClick: () => setAuthMode(AuthMode.RESET_PASSWORD) }));
            case AuthMode.RESET_PASSWORD:
                return (_jsx(ResetPassword, { onSignInClick: () => handleModalClose(), userEmail: userEmail }));
            default:
                return null;
        }
    };
    const handleModalClose = () => {
        setIsModalVisible(false);
    };
    const handleForgetPassword = () => {
        setIsModalVisible(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "authSec login", children: _jsx(CustomColumn, { className: "auth-col", xl: 24, lg: 24, md: 24, sm: 24, xs: 24, children: _jsxs(motion.div, { className: "auth-screen", layout: true, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: {
                            type: "spring",
                        }, children: [_jsx("div", { className: "logoWrapper", children: _jsx("img", { src: logo, height: "144" }) }), _jsxs(CustomForm, { initialValues: { remember: true }, name: "loginForm", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: [_jsx(CustomFormItem, { required: false, name: "email", 
                                        // label="Email"
                                        colon: false, className: "with-label", validateTrigger: "onBlur", rules: [
                                            {
                                                required: true,
                                                message: "Email is required.",
                                            },
                                            { type: "email", message: "Email is invalid." },
                                            {
                                                max: 320,
                                            },
                                        ], children: _jsx(CustomInput, { placeholder: "Email" }) }), _jsx(CustomFormItem, { required: false, validateTrigger: "onBlur", className: "with-label", 
                                        // label="Password"
                                        colon: false, rules: [
                                            {
                                                required: true,
                                                message: "Password is required.",
                                            },
                                            {
                                                max: 100,
                                            },
                                            {
                                                min: 6,
                                                message: "password must be at least 6 characters.",
                                            },
                                        ], name: "password", children: _jsx(CustomPassword, { type: "password", placeholder: "Enter password" }) }), _jsx("div", { className: "forgot-pass", children: _jsx(CustomButton, { className: "link", onClick: () => handleForgetPassword(), children: "Forgot your password?" }) }), _jsx(CustomFormItem, { children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 btn", children: "Login" }) })] })] }) }) }), _jsx(CustomModal, { open: isModalVisible, centered: true, closable: true, onCancel: handleModalClose, width: "670px", style: { borderRadius: 12, overflow: "hidden" }, 
                // className={styles.orderModal}
                footer: null, children: _jsx(_Fragment, { children: _jsx("div", { className: "authModalWrapper", children: renderContent() }) }) })] }));
};
export default Login;
