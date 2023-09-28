import React, { memo, forwardRef } from "react";
import { Button, ButtonProps } from "antd";
import "./CustomButton.less";

const CustomButton: React.FC<ButtonProps> = forwardRef(
  (props: ButtonProps, ref: any) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={`${
          props?.className ? props?.className : ""
        } gx-mb-0 btnStyling buttonStyles`}
      >
        {props.children}
      </Button>
    );
  }
);

export default memo(CustomButton);
