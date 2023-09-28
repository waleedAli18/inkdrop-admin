import React, { useState } from "react";
import { Button, Form, Input, InputProps } from "antd";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import CustomForm from "../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";

const FormItem = Form.Item;

function OTP(props: any) {
  const [otp, setOtp] = useState<string>("");

  const [counter, setCounter] = React.useState(30);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="gx-app-login-main-content">
      <div className="gx-app-login-content">
        <CustomForm
          initialValues={{ remember: true }}
          name="basic"
          className="gx-signin-form gx-form-row0"
        >
          <div className="resend-wrapper">
            <OTPInput
              value={otp}
              inputType="number"
              onChange={setOtp}
              numInputs={4}
              shouldAutoFocus={true}
              renderInput={(props: InputProps) => <Input {...props} />}
            />
          </div>

          <FormItem>
            <CustomButton
              type="primary"
              className="gx-mb-0 btn default-btn"
              htmlType="submit"
              disabled={otp?.length < 4}
              onClick={() => props.onSubmit(otp)}
              loading={props.loading}
            >
              Verify
            </CustomButton>
            {props.otpResendLogin && (
              <>
                <div className="text-center forgot-pass">
                  Didn’t Receive Yet ?{" "}
                  <Button
                    type="primary"
                    disabled={counter >= 1 ? true : false}
                    htmlType="submit"
                    loading={props.otpLoading}
                    onClick={() => {
                      if (counter >= 1) {
                      } else {
                        props.resendOTP();
                        setCounter(30);
                      }
                    }}
                    className="resendCounter"
                  >
                    {" "}
                    {counter >= 1
                      ? `Resend in ${counter} seconds`
                      : "Resend Now"}
                  </Button>
                </div>

                <p className="already-have-account">
                  <Link to="/">Back to Login</Link>
                </p>
              </>
            )}
          </FormItem>
        </CustomForm>
      </div>
    </div>
  );
}

export default OTP;
