import React from "react";

type SvgIconProps = {
  id: string;
  width?: number;
  height?: number;
  className?: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  id,
  width = 24,
  height = 24,
  className,
}) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`/symbol-defs.svg#${id}`} />
    </svg>
  );
};

export default SvgIcon;
