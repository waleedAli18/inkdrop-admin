"use client";

import React from "react";
import { Checkbox } from "antd";
import "./sizeSelector.less";

interface SizeSelectorProps {
  selectedSizes: string[]; // Change to an array of selected sizes
  onSelectSize: (sizes: string[]) => void;
  sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSizes,
  onSelectSize,
  sizes,
}) => {
  const handleChange = (checkedValues: string[]) => {
    onSelectSize(checkedValues);
  };

  return (
    <Checkbox.Group
      onChange={handleChange}
      value={selectedSizes}
      className="sizeSelectorWrapper"
    >
      {sizes?.map((size) => (
        <Checkbox key={size} value={size}>
          {size}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export default SizeSelector;
