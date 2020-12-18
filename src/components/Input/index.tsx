import * as React from 'react';
import { Textbox, Textarea } from './styles';

interface InputProps {
  value: string;
  placeholder: string;
  large?: boolean;
  setValue: (value: string) => any;
}

export function Input(props: InputProps) {
  if (props.large) {
    return (
      <Textarea 
        placeholder={props.placeholder}
        value={props.value} 
        onChange={(value) => props.setValue(value.target.value)} 
      />
    )
  }

  return (
    <Textbox 
      placeholder={props.placeholder}
      value={props.value} 
      onChange={(value) => props.setValue(value.target.value)} 
    />
  )
}
  
