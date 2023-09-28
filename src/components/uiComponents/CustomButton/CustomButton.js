import { jsx as _jsx } from "react/jsx-runtime";
import { memo, forwardRef } from "react";
import { Button } from "antd";
import "./CustomButton.less";
const CustomButton = forwardRef((props, ref) => {
    return (_jsx(Button, { ref: ref, ...props, className: `${props?.className ? props?.className : ""} gx-mb-0 btnStyling buttonStyles`, children: props.children }));
});
export default memo(CustomButton);
