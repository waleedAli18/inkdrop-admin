import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Form } from "antd";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomPassword from "../../../components/uiComponents/CustomPassword/CustomPassword";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import "./../auth.less";
const ResetPassword = ({ userEmail, resetButtonText, }) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(`values`, values);
        console.log(`user email`, userEmail);
    };
    // const validateConfirmPassword = (_: any, value: string) => {
    //   if (!value || form.getFieldValue("password") === value) {
    //     return Promise.resolve();
    //   }
    //   return Promise.reject("The two passwords do not match!");
    // };
    return (_jsx("div", { className: "authSec resetPassword", children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, children: _jsxs("div", { className: "authScreen", children: [_jsx("div", { className: "head", children: _jsxs("h2", { children: [" ", resetButtonText ? "Change" : "New", " Password"] }) }), _jsxs(CustomForm, { initialValues: { remember: true }, name: "resetPasswordForm", form: form, onFinish: onFinish, className: "gx-signin-form gx-form-row0", children: [resetButtonText && (_jsx(CustomFormItem, { validateTrigger: "onBlur", className: "with-label", name: "oldPassword", colon: false, rules: [
                                    {
                                        required: true,
                                        message: "Old Password is required.",
                                    },
                                    {
                                        max: 100,
                                    },
                                    {
                                        min: 6,
                                        message: "Old Password must be at least 6 characters.",
                                    },
                                ], children: _jsx(CustomPassword, { placeholder: " Old Password" }) })), _jsx(CustomFormItem, { validateTrigger: "onBlur", className: "with-label", name: "newPassword", colon: false, rules: [
                                    {
                                        required: true,
                                        message: "New password is required.",
                                    },
                                    {
                                        max: 100,
                                    },
                                    {
                                        min: 6,
                                        message: "New password must be at least 6 characters.",
                                    },
                                ], children: _jsx(CustomPassword, { placeholder: " New Password" }) }), _jsx(CustomFormItem, { validateTrigger: "onBlur", className: "with-label", name: "confirmNewPassword", colon: false, rules: [
                                    {
                                        required: true,
                                        message: "Confirm your new Password!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("newPassword") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject("Passwords do not match.");
                                        },
                                    }),
                                ], children: _jsx(CustomPassword, { placeholder: "Confirm New Password" }) }), _jsx(CustomFormItem, { className: "text-center mt-4", children: _jsxs(CustomButton, { type: "primary", htmlType: "submit", className: "gx-mb-0 btn", children: [resetButtonText ? resetButtonText : "Reset", " Password"] }) })] })] }) }) }));
};
export default ResetPassword;
