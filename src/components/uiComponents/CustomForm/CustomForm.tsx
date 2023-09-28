import { Form, FormProps } from "antd";
import React, { memo, ReactNode } from "react";
import "./CustomForm.less";

interface CustomFormProps extends FormProps {
  children?: ReactNode;
}
const CustomForm: React.FC<CustomFormProps> = (props) => {
  return (
    <div className="custom-form-container">
      <Form {...props}>{props.children}</Form>
    </div>
  );
};

export default memo(CustomForm);
