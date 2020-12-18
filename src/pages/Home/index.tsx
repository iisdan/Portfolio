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
import { Skill } from '../../components/Skill';
import { MaxWidth } from '../../components/MaxWidth';
import { Work } from '../../components/Work';

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
          
          My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience.
          
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

        <Title size="s">Featured</Title>
        <Spacer size="s" />

          <Row>
            <Image src={require('../../assets/nodewhite.png')} height={40} />
            <Spacer size="s" />
            <Image src={require('../../assets/reactjs.png')} height={40} />
            {/* <Spacer size="s" />
            <Image src={require('../../assets/angular.png')} height={40} /> */}
            <Spacer size="s" />
            <Image src={require('../../assets/php.png')} height={40} />
            <Spacer size="s" />
            <Image src={require('../../assets/mongo.png')} height={40} />
            <Spacer size="s" />
            <Image src={require('../../assets/mysql.png')} height={40} />
            <Spacer size="s" />
            <Image src={require('../../assets/firebase.png')} height={40} />
          </Row>

        <Spacer size="s" />

        <Title size="s">General</Title>
        <Spacer size="xs" />

        <MaxWidth>
          <Row>
            <Skill>Javascript ES6</Skill> 
            <Skill>Typescript</Skill> 
            <Skill>NPM</Skill> 
            <Skill>Bash</Skill> 
            <Skill>Docker</Skill> 
            <Skill>Git</Skill> 
            <Skill>Unit Testing</Skill> 
            <Skill>Bundling</Skill> 
          </Row>
        </MaxWidth>

        <Spacer size="s" />

        <Title size="s">Front End</Title>
        <Spacer size="xs" />

        <MaxWidth>
          <Row>
            <Skill>React</Skill> 
            <Skill>React Native</Skill> 
            <Skill>Redux</Skill> 
            <Skill>AngularJs</Skill> 
            <Skill>Angular</Skill> 
            <Skill>HTML 5</Skill> 
            <Skill>JSX</Skill> 
            <Skill>CSS 3</Skill> 
            <Skill>JSS</Skill> 
            <Skill>Cordova</Skill> 
          </Row>
        </MaxWidth>

        <Spacer size="s" />

        <Title size="s">Back End</Title>
        <Spacer size="xs" />

        <MaxWidth>
          <Row>
            <Skill>NodeJs</Skill> 
            <Skill>Express</Skill> 
            <Skill>PHP</Skill> 
            <Skill>SQL / MySQL</Skill> 
            <Skill>NoSQL / MongoDB</Skill> 
            <Skill>Terraform</Skill> 
            <Skill>Data Ingestion</Skill> 
          </Row>
        </MaxWidth>

        <Spacer size="s" />

        <Title size="s">Other Notable Libraries</Title>
        <Spacer size="xs" />

        <MaxWidth>
          <Row>
            <Skill>Styled Components</Skill> 
            <Skill>Material UI</Skill> 
            <Skill>Immutable</Skill> 
            <Skill>MomentJs</Skill> 
            <Skill>Ffmpeg</Skill> 
            <Skill>Twillio</Skill> 
            <Skill>Font Awesome</Skill> 
          </Row>
        </MaxWidth>

        <Spacer size="s" />

        <Title size="s">Design</Title>
        <Spacer size="xs" />

        <MaxWidth>
          <Row>
            <Skill>Photoshop</Skill> 
            <Skill>After Effects</Skill> 
            <Skill>Illustrator</Skill> 
          </Row>
        </MaxWidth>

      </Section>

      <Section>

        <Wiggle>
          <Image src={require('../../assets/laser.png')} width={150} />
        </Wiggle>

        <Title size="l">PORTFOLIO HIGHLIGHTS</Title>

        <Spacer size="xs" />

        <Paragraph>
        My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. My name is Dan Herbert.
        </Paragraph>

        <Spacer size="s" />

        <Work 
          logo={<Image src={require('../../assets/ftlogo.png')} width={250} />}
          description={
            <>
              My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. 
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/eatgreen.png')} width={250} />}
          description={
            <>
              My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. 
            </>
          }
        />

      </Section>
      
    </>
  )
}
  
