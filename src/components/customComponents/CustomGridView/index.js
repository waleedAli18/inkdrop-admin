import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import { motion, AnimatePresence } from "framer-motion";
const CustomGridView = (props) => {
    const { leftHeader, rightHeader, content, btnText, btnAction, btnIcon, } = props;
    return (_jsxs(_Fragment, { children: [(leftHeader || rightHeader) && (_jsx("div", { className: "topHeader top-row", children: _jsxs(CustomRow, { children: [_jsx(CustomColumn, { xl: btnText ? 8 : 12, lg: btnText ? 8 : 12, md: 24, sm: 24, xs: 24, className: "search-filter", children: leftHeader }), _jsx(CustomColumn, { className: "topheader-btn", xl: btnText ? 16 : 12, lg: btnText ? 16 : 12, md: 24, sm: 24, xs: 24, children: _jsx(AnimatePresence, { children: _jsx(motion.div, { layout: true, initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 }, transition: {
                                        type: "tween",
                                    }, children: _jsx("div", { className: "right-header", children: _jsxs("div", { className: "aside", children: [rightHeader, btnText && (_jsx(CustomButton
                                                // htmlType="button"
                                                , { 
                                                    // htmlType="button"
                                                    className: "deafult-btn", icon: btnIcon, onClick: btnAction, type: "primary", children: btnText }))] }) }) }) }) })] }) })), _jsx("div", { className: "custom-table-grid-view-container", children: content })] }));
};
export default CustomGridView;
