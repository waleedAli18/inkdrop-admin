import { TimePicker, TimePickerProps } from "antd";
import { memo } from "react";
import "./CustomTimePicker.less";

const CustomTimePicker = (props: TimePickerProps) => {
  return (
    <span className="custom-timepicker">
      <TimePicker
        {...props}
        getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
      />
    </span>
  );
};

export default memo(CustomTimePicker);
