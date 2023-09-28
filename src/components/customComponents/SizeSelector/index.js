"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "antd";
import "./sizeSelector.less";
const SizeSelector = ({ selectedSizes, onSelectSize, sizes, }) => {
    const handleChange = (checkedValues) => {
        onSelectSize(checkedValues);
    };
    return (_jsx(Checkbox.Group, { onChange: handleChange, value: selectedSizes, className: "sizeSelectorWrapper", children: sizes?.map((size) => (_jsx(Checkbox, { value: size, children: size }, size))) }));
};
export default SizeSelector;
