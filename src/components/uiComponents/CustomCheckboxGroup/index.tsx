import { Checkbox } from "antd";
import React, { memo, ReactNode } from "react"; // Make sure to import ChangeEvent
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import "./CustomCheckboxGroup.less";
import { CheckboxGroupProps } from "antd/lib/checkbox";

const CheckboxGroup = Checkbox.Group;

interface CustomCheckboxGroupProps extends CheckboxGroupProps {
  children?: ReactNode;
  onChange?: (checkedValues: CheckboxValueType[]) => void;
}

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = (props) => {
  const { onChange, ...restProps } = props;

  return (
    <div>
      <CheckboxGroup {...restProps} onChange={onChange} />
    </div>
  );
};

export default memo(CustomCheckboxGroup);
