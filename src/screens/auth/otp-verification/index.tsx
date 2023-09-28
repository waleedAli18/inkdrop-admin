import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Input, InputRef, message } from "antd";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import "./../auth.less";

interface OtpVerificationProps {
  userEmail: string;
  onResetClick: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  userEmail,
  onResetClick,
}) => {
  // function OtpVerification() {
  const [form] = Form.useForm();
  const [counter, setCounter] = useState(30);
  const [otpInput, setOTPInput] = useState<string>("");
  const inputRefs = useRef<InputRef[]>([]);

  useEffect(() => {
    if (counter > 0) {
      const timeout = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [counter]);

  const key = "otpmsg";

  const openMessage = (e: React.MouseEvent) => {
    setCounter(30);
    e.preventDefault();
    message.loading({
      content: "Sending OTP",
      key,
    });
    setTimeout(() => {
      message.success({
        content: `OTP sent to ${userEmail}`,
        key,
        duration: 2,
      });
    }, 1500);
  };

  const handleOTPInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length === 1) {
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
        setOTPInput((prev) => prev + value);
      } else if (value.length === 0) {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
        setOTPInput((prev) => prev.slice(0, prev.length - 1));
      }
    } else {
      message.error({
        content: `${value} is not a number!`,
        duration: 3,
      });
    }
  };

  const handleOTPInputPaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain").slice(0, 4);
    const otpInputs = pastedData.split("").slice(0, 4);

    otpInputs.forEach((otp, index) => {
      setOTPInput((prev) => {
        if (prev.length < 4) {
          if (index < inputRefs.current.length) {
            inputRefs.current[index].input.value = otp;
            if (index < inputRefs.current.length - 1) {
              inputRefs.current[index + 1].focus();
            }
          }
          return prev + otp;
        }
        return prev;
      });
    });
  };

  const handleOTPInputKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (
      event.key === "Backspace" &&
      index > 0 &&
      !inputRefs.current[index].input.value
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (values: any) => {
    const otpValues = Object.keys(values)
      .filter((key) => key.startsWith("otp"))
      .map((key) => values[key])
      .join("");
    console.log("OTP:", otpValues);
    onResetClick();
  };

  return (
    <div className="authSec otp-main">
      <div className="container">
        <div className="authScreen">
          <div className="head">
            <h2>OTP</h2>
          </div>

          <CustomForm
            onFinish={handleSubmit}
            initialValues={{ remember: true }}
            name="otpInput"
            form={form}
            className="gx-signin-form gx-form-row0"
          >
            <div className="otpWrapper">
              {[...Array(4)].map((_, index) => (
                <CustomFormItem
                  key={index}
                  name={`otp${index}`}
                  rules={[{ required: true, message: " " }]}
                >
                  <Input
                    maxLength={1}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    value={otpInput[index] || ""}
                    onChange={(e) => handleOTPInputChange(e, index)}
                    onKeyDown={(e) => handleOTPInputKeyDown(e, index)}
                    onPaste={handleOTPInputPaste}
                    className="otpInput"
                  />
                </CustomFormItem>
              ))}
            </div>

            <div className="head">
              <p>
                Kindly check your e-mail ({userEmail}) and provide the 4-digits
                OTP above.
              </p>
            </div>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                className="gx-mb-0 btn"
                htmlType="submit"
                // onClick={handleClick}
              >
                Verify
              </CustomButton>
            </CustomFormItem>
            <p className="already-have-account">
              I didn't receive the code!
              <Button
                type="primary"
                className="gx-mb-0 link"
                htmlType="submit"
                onClick={openMessage}
                disabled={counter >= 1 ? true : false}
              >
                Send Again {counter >= 1 && `in ${counter}s`}
              </Button>
            </p>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
