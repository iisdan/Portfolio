import * as React from 'react';
import { Image } from '../Image';
import { Particles } from '../Particles';
import { Container } from './styles';

interface HeaderProps {
  
}

export function Header(props: HeaderProps) {
  return (
    <>
    <Container>
      <Image src={require('../../assets/logo.png')} width={300} />

      {/* To get parallax we need to use 3 particlejs instances because of a bug in react-particles-js */}
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
    </>
  )
}
  
