import * as React from 'react';
import { FlexRow } from './styles';

interface RowProps {
  children: React.ReactNode;
  verticalAlign?: 'top' | 'center' | 'bottom';
  horizontalAlign?: 'left' | 'center' | 'right'; 
}

export function Row(props: RowProps) {
  return (
    <FlexRow
      horizontalAlign={props.horizontalAlign} 
      verticalAlign={props.verticalAlign}
    >
      {props.children}
    </FlexRow>
  )
}
  
