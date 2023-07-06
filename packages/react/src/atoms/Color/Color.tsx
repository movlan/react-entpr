import React from 'react';
import { Spacing } from '@mvln/foundation';

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color = (props: ColorProps) => {
  const { hexCode, width = Spacing.sm, height = Spacing.sm } = props
  const className = `dse-width-${width} dse-height-${height}`;
  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};

export default Color;
