import React, { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { Wheel } from "@uiw/react-color";
import { motion, AnimatePresence } from "framer-motion";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import "./CustomColorPicker.less";

interface ColorPickerProps {
  value: string[] | null | undefined;
  onChange: (colors: string[]) => void;
}

const CustomColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  const [selectedColor, setSelectedColor] = useState<string>("#f1f1f1");
  const [pickColor, setPickColor] = useState<boolean>(false);

  const handleColorChange = (color: any) => {
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

  return (
    <>
      <div className="wheel-colorpicker-wrapper">
        <div className="selected-color">
          <AnimatePresence>
            {Array.isArray(value) &&
              value.map((color, index) => (
                <Tooltip
                  key={index}
                  color={color}
                  placement="top"
                  title={color}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 100, x: 100 }}
                    style={{ backgroundColor: color }}
                  ></motion.div>
                </Tooltip>
              ))}
          </AnimatePresence>
          <Tooltip
            key="addColor"
            color="#691883"
            placement="top"
            title={pickColor ? "Cancel" : "Add Color"}
          >
            <Button
              className="whiteBtn"
              style={{
                borderRadius: 7,
                height: 35,
                width: 35,
                borderColor: "#691883",
                padding: 0,
              }}
              onClick={() => handleColorPicker()}
            >
              <FontAwesomeIcon
                icon={pickColor ? faMinus : faPlus}
                color="#691883"
              />
            </Button>
          </Tooltip>
        </div>
        {pickColor && (
          <motion.div
            className="aside"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring" }}
          >
            <div className="label">
              <label htmlFor="colorPicker">HEX# </label>
              <Input id="colorPicker" value={selectedColor} readOnly />
            </div>
            <Wheel
              height={75}
              width={75}
              color={selectedColor}
              onChange={handleColorChange}
            />

            <div className="selected-color">
              <div style={{ backgroundColor: selectedColor }}></div>
            </div>

            <CustomButton
              className="whiteBtn doneBtn"
              onClick={addColor}
              disabled={isColorSelected ? isColorSelected : false}
            >
              {isColorSelected ? "Color Exists" : "Add Color"}
            </CustomButton>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default CustomColorPicker;
