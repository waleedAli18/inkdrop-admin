import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "antd";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import "./../auth.less";
const ForgotPassword = ({ onOtpClick, setUserEmail, }) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        onOtpClick();
        setUserEmail(values?.email);
    };
    return (_jsx("div", { className: "authSec forgot-password", children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, children: _jsxs("div", { className: "authScreen", children: [_jsx("div", { className: "head", children: _jsx("h2", { children: "Email" }) }), _jsxs(CustomForm, { initialValues: { remember: true }, name: "basic", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: [_jsx(CustomFormItem, { required: false, name: "email", 
                                // label="Email"
                                colon: false, className: "with-label", validateTrigger: "onBlur", rules: [
                                    {
                                        required: true,
                                        message: "Email Address is required.",
                                    },
                                    { type: "email", message: "Email Address is invalid." },
                                    {
                                        max: 320,
                                    },
                                ], children: _jsx(CustomInput, { placeholder: "Enter Your Email Address" }) }), _jsx("div", { className: "head", children: _jsx("p", { children: "Provide your registered admin e-mail address to get 4-digits OTP to verify your account!" }) }), _jsx(CustomFormItem, { className: "text-center mt-4", children: _jsx(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 btn", children: "Send" }) })] })] }) }) }));
};
export default ForgotPassword;
