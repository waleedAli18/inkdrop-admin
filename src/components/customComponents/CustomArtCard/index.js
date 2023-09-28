import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Rate } from "antd";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomArtCard.less";
const CustomArtCard = ({ data, handleClick, artAcceptDeclineButtons, artAcceptHandle, artDeclineHandle, }) => {
    const { imageSrc, heading, review, category, created } = data;
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs("div", { className: "customArtCardWrapper", children: [_jsxs("div", { className: "customArtCard", onClick: () => handleClick(), children: [_jsx("div", { className: "img", children: _jsx("img", { src: imageSrc, height: 220, width: 220, alt: "Art" }) }), _jsxs("div", { className: "cont", children: [heading && (_jsxs("h3", { children: [heading?.slice(0, 15), heading?.length > 15 && "..."] })), _jsxs("p", { className: "createdOn", children: ["Created On: ", created] }), _jsxs("div", { className: "review", children: [_jsx(Rate, { disabled: true, allowHalf: true, value: review, style: { color: "#F7941D" } }), review] }), _jsxs("div", { className: "category", children: [_jsx("h4", { children: "Products:" }), category?.map((cat, index) => (_jsxs("span", { children: [cat, ", "] }, index)))] })] })] }), artAcceptDeclineButtons && (_jsxs("div", { className: "accept-decline", children: [_jsx(CustomButton, { onClick: () => artAcceptHandle(), children: "Accept" }), _jsx(CustomButton, { onClick: () => artDeclineHandle(), children: "Decline" })] }))] }) }) }));
};
export default CustomArtCard;
