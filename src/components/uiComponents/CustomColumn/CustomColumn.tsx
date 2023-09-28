import { Col, ColProps } from "antd";
import React, { memo, ReactNode } from "react";

interface CustomColumnProps extends ColProps {
  children?: ReactNode;
}

const CustomColumn: React.FC<CustomColumnProps> = (props) => {
  return (
    <Col {...props} className={`custom-column ${props.className}`}>
      {props.children}
    </Col>
  );
};

export default memo(CustomColumn);
