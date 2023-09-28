import React, { memo } from "react";
import { Switch, SwitchProps } from "antd";
import "./CustomSwitch.less";

interface CustomSwitchProps extends SwitchProps {
  // You can add any additional props specific to your component here
}

const CustomSwitch: React.FC<CustomSwitchProps> = (props) => {
  return (
    <Switch
      {...props}
      className={`${
        props.className ? props.className : ""
      } gx-mb-0 switchStyling`}
    />
  );
};

export default memo(CustomSwitch);
