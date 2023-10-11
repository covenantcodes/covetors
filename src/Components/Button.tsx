import React, { useState } from 'react';

interface CustomButtonProps {
  textColor: string;
  bgColor: string;
  text: string;
  width: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  hoverTextColor: string;
  hoverBgColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  textColor,
  bgColor,
  text,
  width,
  padding,
  fontSize,
  fontWeight,
  hoverTextColor,
  hoverBgColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    color: isHovered ? hoverTextColor : textColor,
    backgroundColor: isHovered ? hoverBgColor : bgColor,
    width: width,
    padding: padding,
    fontWeight: fontWeight,
    fontSize: fontSize,
    borderRadius: '73px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default CustomButton;
