import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { memo } from "react";
import "./CustomDatePicker.less";

const CustomDatePicker = (props: DatePickerProps) => {
  return (
    <span className="custom-date-container">
      <DatePicker
        {...props}
        getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
      />
    </span>
  );
};

export default memo(CustomDatePicker);
