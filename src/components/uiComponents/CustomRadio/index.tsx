import { Radio, RadioProps } from "antd";
import { memo } from "react";
import "./CustomRadio.less";

interface CustomRadioProps extends RadioProps {
  // Any additional props we might need
}

const CustomRadio: React.FC<CustomRadioProps> = (props) => {
  return (
    <div className="custom-radio-container">
      <Radio {...props}>{props.children}</Radio>
    </div>
  );
};

export default memo(CustomRadio);
