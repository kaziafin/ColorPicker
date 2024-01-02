import React, { useMemo } from 'react';
import ColorPickerLogic from './ColorpickerLogic';
import '../style/ColorPicker.css'; // Import the CSS file

const ColorPicker = ({ colors, onColorSelect, defaultColor }) => {
  const {
    selectedColor,
    customColor,
    handleColorClick,
    handleCustomColorChange,
  } = ColorPickerLogic({ colors, onColorSelect, defaultColor });

  // Memoize the mapped color values
  const colorItems = useMemo(
    () =>
      colors.map((color) => (
        <li
          key={color}
          style={{
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            backgroundColor: color,
          }}
          onClick={() => handleColorClick(color)}
        />
      )),
    [colors, handleColorClick]
  );

  return (
    <div className="color-picker-container">
      <div className="predefined-colors">
        <strong>Predefined Colors:</strong>
        <ul style={{ listStyle: 'none', padding: 0 }}>{colorItems}</ul>
      </div>

      <div className="custom-color-input">
        <strong>Custom Color:</strong>
        <input
          type="text"
          placeholder="Enter color code"
          value={customColor}
          onChange={handleCustomColorChange}
          style={{ marginLeft: '10px' }}
        />
        <div
          style={{
            display: 'inline-block',
            width: '30px',
            height: '30px',
            backgroundColor: customColor,
            marginLeft: '10px',
          }}
        ></div>
      </div>

      <div className="selected-color">
        <strong>Selected Color:</strong>
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: selectedColor,
            marginLeft: '10px',
            display: 'inline-block',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
