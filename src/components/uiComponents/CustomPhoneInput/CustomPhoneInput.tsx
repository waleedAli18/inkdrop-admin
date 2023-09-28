import React, { memo } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";

interface CustomPhoneInputProps extends DefaultInputComponentProps {
  // Any additional props we might need
  onChange: () => void;
}

const CustomPhoneInput: React.FC<any> = (props: CustomPhoneInputProps) => {
  return (
    <span className="kl-custom-input-container">
      <PhoneInput {...props} />
    </span>
  );
};

export default memo(CustomPhoneInput);
