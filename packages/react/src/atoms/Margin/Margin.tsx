import React from 'react';
import { Spacing } from '@mvln/foundation';

export interface MarginProps {
  space?: keyof typeof Spacing;
  top?: boolean;
  right?: boolean;
  left?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Margin = (props: MarginProps) => {
  const { space = 'xxxs', children, top, left, right, bottom } = props;

  let className = ``;

  if (!top && !bottom && !left && !right) {
    className = `dse-margin-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }
  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }
  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }
  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
