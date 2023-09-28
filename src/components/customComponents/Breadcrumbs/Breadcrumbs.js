import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import ArrowLeftIcon from "../../../assets/all-gts-svg-files/arrowlefticon";
import CustomSearch from "../../uiComponents/CustomSearch/CustomSearch";
import CustomSearchIcon from "../../../assets/all-gts-svg-files/customsearchicon";
import "./breadcurmbs.less";
const Breadcrumbs = (props) => {
    const navigate = useNavigate();
    const onFinishSearch = async (value) => {
        console.log("object", value);
    };
    return (_jsx("div", { className: `breadcurmbsSec cardWithStyle ${props.className}`, children: _jsxs(CustomRow, { align: "middle", justify: "center", children: [_jsx(CustomColumn, { xl: props.search ? 12 : 24, lg: props.search ? 12 : 24, md: 24, sm: 24, xs: 24, className: "title-icon-sec", children: _jsx(AnimatePresence, { children: _jsxs(motion.div, { layout: true, initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -30 }, transition: {
                                type: "spring",
                                delay: 0.05,
                            }, children: [props.Icon && (_jsx("div", { className: "breadcurmbsSecShape inline-block", children: _jsx("i", { className: props.Icon }) })), props?.Title ? (_jsxs(CustomHeading, { className: "breadcurmbsHeading inline-block margin-0", children: [props?.BackBtn && (_jsx("span", { className: "backbtn", onClick: () => navigate(-1), children: _jsx(ArrowLeftIcon, {}) })), props?.Title] })) : null] }) }) }), props.search && (_jsx(CustomColumn, { xl: 12, lg: 12, md: 24, sm: 24, xs: 24, children: _jsx(AnimatePresence, { children: _jsx(motion.div, { layout: true, initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 30 }, transition: {
                                type: "spring",
                                delay: 0.05,
                            }, children: _jsx(CustomSearch, { placeholder: "Search", allowClear: true, onSearch: onFinishSearch, suffix: _jsx(CustomSearchIcon, {}) }) }) }) })), _jsx(CustomColumn, { md: 12, sm: 24, xs: 24, children: props?.AddBtn })] }) }));
};
export default memo(Breadcrumbs);
