import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomArtCard from "../CustomArtCard";
import CustomAssociatedProductsCard from "../CustomAssociatedProductsCard";
import "./DesignModal.less";
const DesignModal = ({ artCardData, associatedProductData, designId, artAcceptHandle, artDeclineHandle, artAcceptDeclineButtons, associateAcceptDeclineButtons, associateAcceptHandle, associateDeclineHandle, }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "design-modal-wrapper", children: [_jsxs("h2", { children: ["Design #", designId] }), _jsx(CustomRow, { children: _jsx(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, children: artCardData?.map((item) => (_jsx(CustomArtCard, { data: item, handleClick: () => console.log("Card Clicked"), artAcceptDeclineButtons: artAcceptDeclineButtons, artAcceptHandle: artAcceptHandle, artDeclineHandle: artDeclineHandle }, item.id))) }) }), _jsx(CustomRow, { children: _jsxs(CustomColumn, { xl: 24, lg: 24, md: 24, sm: 24, xs: 24, children: [_jsx(CustomHeading, { className: "head my-3 ", children: "Associated Products" }), _jsx("div", { className: "associateCardWrapper ", children: associatedProductData.map((list, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.15 }, children: _jsx(CustomAssociatedProductsCard, { data: list, associateAcceptDeclineButtons: associateAcceptDeclineButtons, associateAcceptHandle: associateAcceptHandle, associateDeclineHandle: associateDeclineHandle }, list.id) }, list.id))) })] }) })] }) }));
};
export default DesignModal;
