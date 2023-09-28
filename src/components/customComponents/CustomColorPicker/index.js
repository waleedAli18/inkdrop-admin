import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { Wheel } from "@uiw/react-color";
import { motion, AnimatePresence } from "framer-motion";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomColorPicker.less";
const CustomColorPicker = ({ value, onChange }) => {
    const [selectedColor, setSelectedColor] = useState("#f1f1f1");
    const [pickColor, setPickColor] = useState(false);
    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
    };
    const handleColorPicker = () => {
        setPickColor(!pickColor);
    };
    const addColor = () => {
        if (!value || !value.includes(selectedColor)) {
            onChange([...(value || []), selectedColor]);
            setSelectedColor("#f1f1f1");
            setPickColor(false);
        }
    };
    const isColorSelected = value && value.includes(selectedColor);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "wheel-colorpicker-wrapper", children: [_jsxs("div", { className: "selected-color", children: [_jsx(AnimatePresence, { children: Array.isArray(value) &&
                                value.map((color, index) => (_jsx(Tooltip, { color: color, placement: "top", title: color, children: _jsx(motion.div, { initial: { opacity: 0, y: 100, x: 100 }, animate: { opacity: 1, y: 0, x: 0 }, exit: { opacity: 0, y: 100, x: 100 }, style: { backgroundColor: color } }) }, index))) }), _jsx(Tooltip, { color: "#691883", placement: "top", title: pickColor ? "Cancel" : "Add Color", children: _jsx(Button, { className: "whiteBtn", style: {
                                    borderRadius: 7,
                                    height: 35,
                                    width: 35,
                                    borderColor: "#691883",
                                    padding: 0,
                                }, onClick: () => handleColorPicker(), children: _jsx(FontAwesomeIcon, { icon: pickColor ? faMinus : faPlus, color: "#691883" }) }) }, "addColor")] }), pickColor && (_jsxs(motion.div, { className: "aside", initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 30 }, transition: { type: "spring" }, children: [_jsxs("div", { className: "label", children: [_jsx("label", { htmlFor: "colorPicker", children: "HEX# " }), _jsx(Input, { id: "colorPicker", value: selectedColor, readOnly: true })] }), _jsx(Wheel, { height: 75, width: 75, color: selectedColor, onChange: handleColorChange }), _jsx("div", { className: "selected-color", children: _jsx("div", { style: { backgroundColor: selectedColor } }) }), _jsx(CustomButton, { className: "whiteBtn doneBtn", onClick: addColor, disabled: isColorSelected ? isColorSelected : false, children: isColorSelected ? "Color Exists" : "Add Color" })] }))] }) }));
};
export default CustomColorPicker;
