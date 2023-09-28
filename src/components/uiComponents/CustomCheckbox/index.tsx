import { Checkbox } from "antd";
import React, { memo, ReactNode } from "react"; // Make sure to import ChangeEvent
import styles from "./CustomCheckbox.module.css";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

interface CustomCheckboxProps {
  children?: ReactNode;
  onChange?: (checked: boolean, e: CheckboxChangeEvent) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  const { onChange, ...restProps } = props;

  const handleChange = (e: CheckboxChangeEvent) => {
    if (onChange) {
      onChange(e.target.checked, e);
    }
  };

  return (
    <div className={styles.checkboxWrapper}>
      <Checkbox {...restProps} onChange={handleChange}>
        {props.children}
      </Checkbox>
    </div>
  );
};

export default memo(CustomCheckbox);
