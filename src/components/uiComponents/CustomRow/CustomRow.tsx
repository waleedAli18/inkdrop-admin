import { Row, RowProps } from "antd";
import React, { memo, ReactNode } from "react";
import "./custom-row.less";

interface CustomRowProps extends RowProps {
  children?: ReactNode;
}

const CustomRow: React.FC<CustomRowProps> = (props) => {
  return (
    <Row {...props} className={`custom-row ${props.className}`}>
      {props.children}
    </Row>
  );
};

export default memo(CustomRow);
