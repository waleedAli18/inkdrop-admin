import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomAssociatedProductsCard.less";
const CustomAssociatedProductsCard = ({ data, link, children, deleteButton, onDeleteClick, active, associateAcceptDeclineButtons, associateAcceptHandle, associateDeclineHandle, }) => {
    const { imageSrc } = data;
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs("div", { className: `cont ${data?.status}`, children: [imageSrc && (_jsxs("div", { className: "img", children: [_jsx("img", { height: 250, width: 200, src: imageSrc, alt: "Associated Products", style: { objectFit: "contain" } }), deleteButton && (_jsx("button", { onClick: onDeleteClick, className: "deleteIcon" })), !data?.status && (_jsx("span", { className: `status ${data?.status}`, children: data?.status ? "Accepted" : "Rejected" }))] })), children, link && (_jsx(Link, { to: link, children: deleteButton ? "Edit Product" : "Customize Product" })), active, associateAcceptDeclineButtons && (_jsxs("div", { className: "accept-decline", children: [_jsx(CustomButton, { disabled: !data?.status, onClick: () => associateAcceptHandle(), children: "Accept" }), _jsx(CustomButton, { disabled: !data?.status, onClick: () => associateDeclineHandle(), children: "Decline" })] }))] }) }) }));
};
export default CustomAssociatedProductsCard;
