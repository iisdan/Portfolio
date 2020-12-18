import * as React from 'react';
import { Row } from '../Row'
import { Image } from '../Image'
import { Container, NavItem } from './styles';

interface NavBarProps {
  
}

export function NavBar(props: NavBarProps) {
  return (
    <Container>
      <Row horizontalAlign="center" verticalAlign="center">
        <NavItem>About Me</NavItem>
        <NavItem>Skillset</NavItem>
        <NavItem>
          <Image 
            src={require('../../assets/smallLogo.png')} 
            width={40}
          />
        </NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Message</NavItem>
      </Row>
    </Container>
  )
}
  
