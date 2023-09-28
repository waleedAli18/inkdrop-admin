import React, { memo } from "react";
import { Form, FormItemProps } from "antd";
import "./CustomFormItem.less";

interface CustomFormItem extends FormItemProps {
  children?: React.ReactElement;
}

const CustomFormItem: React.FC<CustomFormItem> = (props) => {
  return (
    <div
      className={`custom-form-item ${props.className ? props.className : ""}`}
    >
      <Form.Item {...props}>{props.children}</Form.Item>
    </div>
  );
};

export default memo(CustomFormItem);
