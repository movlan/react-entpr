import React from 'react';
import { Spacing } from '@movlan/foundation';

type ImageProps = {
  width: keyof typeof Spacing;
  height: keyof typeof Spacing;
  alt: string;
  src: string;
};

const Image = (props: ImageProps) => {
  const { width, height, alt, src } = props;
  const className = `dse-width-${width} dse-height-${height}`;

  return <img className={className} alt={alt} src={src} />;
};

export default Image;
