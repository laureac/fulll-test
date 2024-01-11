import React from "react";

type IconProps = {
  height?: number;
  width?: number;
  iconName: string;
};

const Icon: React.FC<IconProps> = ({ height = 25, width = 25, iconName }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/icons/${iconName}.svg`}
      alt="My Icon"
      width={width}
      height={height}
    />
  );
};

export default Icon;
