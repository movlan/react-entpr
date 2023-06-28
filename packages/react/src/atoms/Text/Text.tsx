import React, { ReactNode } from 'react';
import { FontSize } from '@movlan/foundation';

export interface TextProps {
  size?: keyof typeof FontSize;
  children: ReactNode;
}

const Text = (props: TextProps) => {
  const { size = FontSize.base, children } = props;

  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
