import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const CustomHeading = (props) => {
    const { type, className = "" } = props;
    let headingClass = "";
    switch (type) {
        case "secondary":
            headingClass = "second-heading";
            break;
        default:
            headingClass = "primary-heading";
            break;
    }
    return (_jsx("span", { className: "kl-custom-heading", children: _jsx("h5", { ...props, className: `${headingClass} ${className}`, children: props.children }) }));
};
export default memo(CustomHeading);
