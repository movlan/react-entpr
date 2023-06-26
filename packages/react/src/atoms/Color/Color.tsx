import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Spacing } from '@movlan/foundation';
=======
import Spacing from '../../foundation/Spacing';
>>>>>>> f8ffb93 (finish atom/Color)
=======
import { Spacing } from '@movlan/foundation';
>>>>>>> fe5ba66 (finish foundation package)

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
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
