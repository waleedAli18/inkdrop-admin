import { Form } from "antd";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomPassword from "../../../components/uiComponents/CustomPassword/CustomPassword";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import "./../auth.less";

interface FormData {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordFormProps {
  onSignInClick?: () => void;
  userEmail?: string;
  resetButtonText?: string;
}

const ResetPassword: React.FC<ResetPasswordFormProps> = ({
  userEmail,
  resetButtonText,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: FormData) => {
    console.log(`values`, values);
    console.log(`user email`, userEmail);
  };

  // const validateConfirmPassword = (_: any, value: string) => {
  //   if (!value || form.getFieldValue("password") === value) {
  //     return Promise.resolve();
  //   }
  //   return Promise.reject("The two passwords do not match!");
  // };

  return (
    <div className="authSec resetPassword">
      <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
        <div className="authScreen">
          <div className="head">
            <h2> {resetButtonText ? "Change" : "New"} Password</h2>
          </div>
          <CustomForm
            initialValues={{ remember: true }}
            name="resetPasswordForm"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
          >
            {resetButtonText && (
              <CustomFormItem
                validateTrigger="onBlur"
                className="with-label"
                name="oldPassword"
                colon={false}
                rules={[
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
                ]}
              >
                <CustomPassword placeholder=" Old Password" />
              </CustomFormItem>
            )}

            <CustomFormItem
              validateTrigger="onBlur"
              className="with-label"
              name="newPassword"
              colon={false}
              rules={[
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
              ]}
            >
              <CustomPassword placeholder=" New Password" />
            </CustomFormItem>

            <CustomFormItem
              validateTrigger="onBlur"
              className="with-label"
              name="confirmNewPassword"
              colon={false}
              rules={[
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
              ]}
            >
              <CustomPassword placeholder="Confirm New Password" />
            </CustomFormItem>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={}
              >
                {resetButtonText ? resetButtonText : "Reset"} Password
              </CustomButton>
            </CustomFormItem>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default ResetPassword;
