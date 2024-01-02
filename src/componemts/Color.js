import React from 'react';
import ColorPicker from './ColorPicker';
import '../style/Color.css';

const Color = () => {
  const handleColorSelect = (color) => {
    console.log(`Selected color: ${color}`);
  };

  const availableColors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00'];
  const defaultColor = '';

  return (
    <div className="color-container">
      <h1>Color Picker App</h1>
      <div >
        <ColorPicker colors={availableColors} onColorSelect={handleColorSelect} defaultColor={defaultColor} />
      </div>
    </div>
  );
};

export default Color;
