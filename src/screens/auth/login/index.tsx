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

interface FormData {
  email: string;
  password: string;
}
enum AuthMode {
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  OTP = "OTP",
  RESET_PASSWORD = "RESET_PASSWORD",
  NULL = "null",
}

const Login = () => {
  const [form] = Form.useForm();
  const [authMode, setAuthMode] = useState(AuthMode.FORGOT_PASSWORD);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  // const onChange = (e: boolean) => {
  //   console.log(e);
  // };
  const onFinish = (values: FormData) => {
    console.log("values", values);
    window.location.href = "/dashboard";
  };

  const renderContent = () => {
    switch (authMode) {
      case AuthMode.FORGOT_PASSWORD:
        return (
          <ForgotPassword
            onOtpClick={() => setAuthMode(AuthMode.OTP)}
            onSignInClick={() => setAuthMode(AuthMode.FORGOT_PASSWORD)}
            setUserEmail={setUserEmail}
          />
        );
      case AuthMode.OTP:
        return (
          <OtpVerification
            userEmail={userEmail}
            onResetClick={() => setAuthMode(AuthMode.RESET_PASSWORD)}
          />
        );

      case AuthMode.RESET_PASSWORD:
        return (
          <ResetPassword
            onSignInClick={() => handleModalClose()}
            userEmail={userEmail}
          />
        );
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

  return (
    <>
      <div className="authSec login">
        <CustomColumn
          className="auth-col"
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
        >
          <motion.div
            className="auth-screen"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
            }}
          >
            <div className="logoWrapper">
              <img src={logo} height="144" />
            </div>
            <CustomForm
              initialValues={{ remember: true }}
              name="loginForm"
              form={form}
              onFinish={onFinish}
              className="gx-signin-form gx-form-row0"
            >
              <CustomFormItem
                required={false}
                name="email"
                // label="Email"
                colon={false}
                className="with-label"
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: "Email is required.",
                  },
                  { type: "email", message: "Email is invalid." },
                  {
                    max: 320,
                  },
                ]}
              >
                <CustomInput placeholder="Email" />
              </CustomFormItem>
              <CustomFormItem
                required={false}
                validateTrigger="onBlur"
                className="with-label"
                // label="Password"
                colon={false}
                rules={[
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
                ]}
                name="password"
              >
                <CustomPassword type="password" placeholder="Enter password" />
              </CustomFormItem>
              <div className="forgot-pass">
                <CustomButton
                  className="link"
                  onClick={() => handleForgetPassword()}
                >
                  Forgot your password?
                </CustomButton>
              </div>

              <CustomFormItem>
                <CustomButton
                  type="primary"
                  htmlType="submit"
                  className="gx-mb-0 btn"
                  //   loading={loading}
                >
                  Login
                </CustomButton>
              </CustomFormItem>
            </CustomForm>
          </motion.div>
        </CustomColumn>
      </div>

      {/* Modal */}
      <CustomModal
        open={isModalVisible}
        centered
        closable={true}
        onCancel={handleModalClose}
        width="670px"
        style={{ borderRadius: 12, overflow: "hidden" }}
        // className={styles.orderModal}
        footer={null}
      >
        <>
          <div className="authModalWrapper">{renderContent()}</div>
        </>
      </CustomModal>
    </>
  );
};

export default Login;
