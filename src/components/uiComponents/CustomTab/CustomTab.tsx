import { Tabs, TabsProps } from "antd";
import React, { memo } from "react";
import "./CustomTab.less";

interface CustomTabProps extends TabsProps {}

const CustomTab: React.FC<CustomTabProps> = (props) => {
  return (
    <span className="kl-custom-tab-container">
      <Tabs {...props} className={` ${props.className}`} />
    </span>
  );
};

export default memo(CustomTab);
