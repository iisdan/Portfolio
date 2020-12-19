import * as React from 'react';
import { Row } from '../Row'
import { Image } from '../Image'
import { Container, ExternalLink, NavItem } from './styles';
import animateScrollTo from 'animated-scroll-to';

interface NavBarProps {
  
}

export function NavBar(props: NavBarProps) {
  const scrollOptions = {
    verticalOffset: -90,
  }
  return (
    <Container>
      <Row horizontalAlign="center" verticalAlign="center">

        <NavItem 
          onClick={() => {
            const aboutMe = document.querySelector('.scroll_about_me');
            if (aboutMe) {
              animateScrollTo(aboutMe, scrollOptions)
            }
          }}
        >
          About Me
        </NavItem>

        <NavItem 
          onClick={() => {
            const aboutMe = document.querySelector('.scroll_skillset');
            if (aboutMe) {
              animateScrollTo(aboutMe, scrollOptions)
            }
          }}
        >
          Skillset
        </NavItem>

        <NavItem>
          <Image 
            src={require('../../assets/smallLogo.png')} 
            width={40}
          />
        </NavItem>

        <NavItem 
          onClick={() => {
            const aboutMe = document.querySelector('.scroll_portfolio');
            if (aboutMe) {
              animateScrollTo(aboutMe, scrollOptions)
            }
          }}
        >
          Portfolio
        </NavItem>

        <ExternalLink target="blank" href="https://www.linkedin.com/in/dan-herbert-7889b654/">
          <NavItem>Message</NavItem>
        </ExternalLink>

      </Row>
    </Container>
  )
}
  
