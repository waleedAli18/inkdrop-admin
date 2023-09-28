import { Form } from "antd";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import "./../auth.less";

interface FormData {
  email: string;
}

interface SignInFormProps {
  onSignInClick: () => void;
  onOtpClick: () => void;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ForgotPassword: React.FC<SignInFormProps> = ({
  onOtpClick,
  setUserEmail,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: FormData) => {
    onOtpClick();
    setUserEmail(values?.email);
  };
  return (
    <div className="authSec forgot-password">
      <CustomColumn xl={24} lg={24} md={24} sm={24}>
        <div className="authScreen">
          <div className="head">
            <h2>Email</h2>
          </div>

          <CustomForm
            initialValues={{ remember: true }}
            name="basic"
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
                  message: "Email Address is required.",
                },
                { type: "email", message: "Email Address is invalid." },
                {
                  max: 320,
                },
              ]}
            >
              <CustomInput placeholder="Enter Your Email Address" />
            </CustomFormItem>
            <div className="head">
              <p>
                Provide your registered admin e-mail address to get 4-digits OTP
                to verify your account!
              </p>
            </div>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={loading}
              >
                Send
              </CustomButton>
            </CustomFormItem>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default ForgotPassword;
