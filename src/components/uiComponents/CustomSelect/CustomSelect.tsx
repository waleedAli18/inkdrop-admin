import { Select, SelectProps } from "antd";
import { memo } from "react";
import "./CustomSelect.less";

interface CustomSelectProps extends SelectProps {
  // Any additional props we might need
  type?: "small"; // Define the available select types
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { type, className } = props;
  let customClass = "";
  switch (type) {
    case "small":
      customClass = "small-dropdown";
      break;

    default:
      break;
  }
  return (
    <span className="kl-custom-select-container">
      <Select
        {...props}
        className={`${customClass} ${className}`}
        getPopupContainer={(trigger) => trigger.parentNode}
      />
    </span>
  );
};

export default memo(CustomSelect);
