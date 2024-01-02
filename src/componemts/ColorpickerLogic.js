import React, { useState } from 'react';

const ColorPickerLogic = ({ colors, onColorSelect, defaultColor }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || '');
  const [customColor, setCustomColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
    setCustomColor('');
  };

  const handleCustomColorChange = (event) => {
    const newColor = event.target.value;
    setCustomColor(newColor);
  };

  return { colors, selectedColor, customColor, handleColorClick, handleCustomColorChange };
};

export default ColorPickerLogic;
