import { Input, InputProps } from "antd";
import React, { memo } from "react";
import "./CustomInput.less";

interface CustomInputProps extends InputProps {
  // Any additional props we might need
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <span className="kl-custom-input-container">
      <Input autoComplete="off" {...props} />
    </span>
  );
};

export default memo(CustomInput);
