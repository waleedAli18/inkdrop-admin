import { InputNumber, InputNumberProps } from "antd";
import { memo } from "react";
import "./CustomInputNumber.less";

const CustomInputNumber = (props: InputNumberProps) => {
  return (
    <span className="kl-custom-input-container kl-custom-input-num-container">
      <InputNumber autoComplete="off" {...props} />
    </span>
  );
};

export default memo(CustomInputNumber);
