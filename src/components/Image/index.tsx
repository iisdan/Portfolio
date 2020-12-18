import * as React from 'react';
import { FlexColumn } from './styles';

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
}

export function Image(props: ImageProps) {
  return (
    <img src={props.src} width={props.width} height={props.height} />
  )
}
  
