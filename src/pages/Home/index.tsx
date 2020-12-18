import * as React from 'react';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Paragraph } from '../../components/Paragraph';
import { Section } from '../../components/Section';
import { Spacer } from '../../components/Spacer';
import { Title } from '../../components/Title';
import { Image } from '../../components/Image';
import { Row } from '../../components/Row';
import { Wiggle } from '../../components/Wiggle';

export function HomePage() {
  return (
    <>

      <NavBar />
      
      <Header />

      <Section>

        <div style={{ marginTop: -200 }} />

        <Wiggle>
          <Image src={require('../../assets/astoboy.png')} width={150} />
        </Wiggle>

        <Title size="l">ABOUT ME</Title>

        <Spacer size="s" />

        <Paragraph>
          
          My name is <b>Dan Herbert</b>, I'm a <b>full stack developer</b> in <b>Kitchener Ontario</b> with <b>11 years </b> of industry experience.
          
          <br/><br/>
          
          I've had an interest in coding all my life and began coding professionally in 2009 freelancing web based dental software. 
          Since then I've explored several careers, freelance and personal projects creating a diverse set of programming experience.
          
          <br/><br/>
          
          In my spare time I enjoy craft beers, gaming and even more coding.

          <Spacer size="s" />

          <Row>
            <Image src={require('../../assets/github.png')} height={35} />
            <Spacer size="s" />
            <Image src={require('../../assets/linkedin.png')} height={30} />
          </Row>

        </Paragraph>

      </Section>

      <Section>

        <Wiggle>
          <Image src={require('../../assets/rocket.png')} width={150} />
        </Wiggle>

        <Title size="l">SKILLSET</Title>

        <Spacer size="s" />

        <Paragraph>
          Some stuff
        </Paragraph>

      </Section>
      
    </>
  )
}
  
