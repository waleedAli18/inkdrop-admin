import { memo } from "react";
import { STATUS_CONSTANTS } from "../../../utils/constants/app.constant";
import { StatusConstants } from "../../../utils/types";
import "./CustomStatusBox.less";

interface CustomStatusBoxProps {
  text: keyof StatusConstants;
}

const CustomStatusBox = (props: CustomStatusBoxProps) => {
  return (
    <span className={`custom-status-box ${props.text?.toLowerCase()}`}>
      {STATUS_CONSTANTS[props.text]}
    </span>
  );
};
export default memo(CustomStatusBox);
