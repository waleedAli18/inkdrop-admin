import { Input } from "antd";
import { memo } from "react";
import "./CustomTextarea.less";
import { TextAreaProps } from "antd/lib/input";

const CustomTextarea = (props: TextAreaProps) => {
  const { TextArea } = Input;
  return (
    <span className="custom-textarea-container">
      <TextArea {...props} />
    </span>
  );
};

export default memo(CustomTextarea);
