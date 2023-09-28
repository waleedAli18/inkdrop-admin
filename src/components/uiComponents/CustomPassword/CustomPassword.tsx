import { Input, InputProps } from "antd";
import React, { memo } from "react";
import "./CustomPassword.less";

interface CustomPasswordProps extends InputProps {
  // Any additional props we might need
}

const CustomPassword: React.FC<CustomPasswordProps> = (props) => {
  return (
    <span
      className={`kl-custom-input-container password ${
        props.className ? props.className : ""
      }`}
    >
      <Input.Password autoComplete="new-password" {...props} />
    </span>
  );
};

export default memo(CustomPassword);
