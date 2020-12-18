import * as React from 'react';
import { isStringLiteral } from 'typescript';
import { FlexColumn } from './styles';

interface ImageProps {
  src: string;
  width?: number | string;
  height?: number | string;
}

export function Image(props: ImageProps) {
  const width = isNaN(props.width as number) ? props.width : `${props.width}px`;
  return (
    <img 
      src={props.src} 
      style={{ 
        width: props.width ? width : undefined,
        maxWidth: '100%',
      }} 
      height={props.height} 
    />
  )
}
  
