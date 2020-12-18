import * as React from 'react';
import { FlexColumn } from './styles';

interface ColumnProps {
  children: React.ReactNode;
  verticalAlign?: 'top' | 'center' | 'bottom';
  horizontalAlign?: 'left' | 'center' | 'right'; 
}

export function Column(props: ColumnProps) {
  return (
    <FlexColumn 
      horizontalAlign={props.horizontalAlign} 
      verticalAlign={props.verticalAlign}
    >
      {props.children || <></>}
    </FlexColumn>
  )
}
  
