import * as React from 'react';
import { Row } from '../Row'
import { Column } from '../Column'
import { Image } from '../Image'
import { Particles } from '../Particles'
import { Container } from './styles';
// import Particles from 'react-particles-js';

interface HeaderProps {
  
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Image src={require('../../assets/logo.png')} width={300} />
      <Particles 
        size={3}
        opacity={0.5}
        density={8}
        speed={1}
      />
      <Particles 
        size={2}
        opacity={0.3}
        density={20}
        speed={0.6}
      />
      <Particles 
        size={1}
        opacity={0.3}
        density={60}
        speed={0.3}
      />
    </Container>
  )
}
  
