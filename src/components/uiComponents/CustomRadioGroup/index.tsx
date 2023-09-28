import { Radio, RadioGroupProps } from "antd";
import React, { memo } from "react";
import "./CustomRadioGroup.less";

interface CustomRadioGroupProps extends RadioGroupProps {
  // Any additional props we might need
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = (props) => {
  return (
    <div className="custom-radio-group-container">
      <Radio.Group {...props}>{props.children}</Radio.Group>
    </div>
  );
};

export default memo(CustomRadioGroup);
