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
import { Column } from '../../components/Column';
import { Copyright } from '../../components/Copyright';

interface SkillSet {
  title: string;
  skills: string[];
}

export function HomePage() {

  const skills: SkillSet[] = [
    {
      title: 'Basic',
      skills: ['Javascript ES6', 'Typescript', 'NPM', 'Shell', 'Docker', 'Git', 'Unit Testing', 'Bundling'],
    },
    {
      title: 'Front End',
      skills: ['React', 'React Native', 'Redux', 'AngularJs', 'Angular', 'HTML 5', 'JSX', 'CSS 3', 'JSS', 'Cordova'],
    },
    {
      title: 'Back End',
      skills: ['NodeJs', 'Express', 'PHP', 'SQL / MySQL', 'NoSQL / MongoDB', 'Terraform', 'Migrations', 'Data Ingestion', 'Query Builders'],
    },
    {
      title: 'Other Notable Libraries',
      skills: ['Styled Components', 'Material UI', 'Immutable', 'MomentJs', 'Ffmpeg', 'Twillio', 'Font Awesome'],
    },
    {
      title: 'Design',
      skills: ['Photoshop', 'After Effects', 'Illustrator'],
    },
  ];

  return (
    <>

      <div className="scroll_top" />

      <NavBar />
      
      <Header />

      <Section>

        <div style={{ marginTop: -200 }} />

        <Wiggle>
          <Image src={require('../../assets/astoboy.png')} width={150} />
        </Wiggle>

        <Title size="l" className="scroll_about_me">ABOUT ME</Title>

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

        <Title size="l" className="scroll_skillset">SKILLSET</Title>

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

        {skills.map((skillset) => (
          <>
            <Title size="s">{skillset.title}</Title>
            <Spacer size="xs" />

            <MaxWidth>
              <Row>
                {skillset.skills.map((skill) => (
                  <Skill>{skill}</Skill> 
                ))}
              </Row>
            </MaxWidth>

            <Spacer size="s" />
          </>
        ))}

      </Section>

      <Section>

        <Wiggle>
          <Image src={require('../../assets/laser.png')} width={150} />
        </Wiggle>

        <Title size="l" className="scroll_portfolio">PORTFOLIO HIGHLIGHTS</Title>

        <Spacer size="xs" />

        <Paragraph>
          My name is Dan Herbert, I'm a Full Stack Developer in Kitchener Ontario with 11 years of industry experience. My name is Dan Herbert.
        </Paragraph>

        <Spacer size="s" />

        <Work 
          logo={<Image src={require('../../assets/ftlogo.png')} width={250} />}
          webImage={<Image src={require('../../assets/desktopft.jpg')} width={'100%'} />}
          description={
            <>
              FlameTask is an advanced preventative maintenance application for web and mobile. Equipment can be added and inspected with complex service types that change based on rules and other services. Technicians are given a list and map of all equipment needed to be inspected or serviced. Once found, the technician will scan the barcode or NFC tag to inspect the equipment and see any other due service. FlameTask gives a variety of PDF and Excel reports for clients and internal use.
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/eatgreen.png')} width={250} />}
          webImage={<Image src={require('../../assets/eatgreenweb.jpg')} width={'100%'} />}
          description={
            <>
              Eat Green Organics is an organic grocery ordering web site that features new and recurring orders. Once ordered, the software will prepare sorting lists and a map for delivery drivers as well as administrative documents.
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/doccontrollogo.png')} width={250} />}
          webImage={<Image src={require('../../assets/doccontrolweb.jpg')} width={'100%'} />}
          description={
            <>
              Document Control allows users to use advanced search options to quickly find documents within thousands of records. Users can sign out a document and request changes to be approved by administrators. Once approved it will keep a new version of metadata with the new file.
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/crowdcomlogo.png')} width={250} />}
          webImage={<Image src={require('../../assets/crowdcomweb.jpg')} width={'100%'} />}
          description={
            <>
              CrowdCom is a website for suggesting new ideas for companies. Other customers can vote on ideas and companies can then reply and give out rewards. 
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/freelancelogo.png')} width={250} />}
          webImage={<Image src={require('../../assets/webfreelance.jpg')} width={'100%'} />}
          description={
            <>
              Freelance unity is an interactive contract between a freelancer and a client. Projects have stages that include a completion list and agreed upon payment.
            </>
          }
        />

        <Work 
          logo={<Image src={require('../../assets/highscorelogo.png')} width={250} />}
          webImage={<Image src={require('../../assets/highscoreweb.jpg')} width={'100%'} />}
          description={
            <>
              An application for tracking and displaying leaderboards on a TV in arcades and tournaments
            </>
          }
        />

      </Section>

      <Section>

        <Column>
        
          <Image src={require('../../assets/logo.png')} width={200} opacity={0.5} />

          <Spacer size="xs" />

          <Copyright />

          <Spacer size="s" />

        </Column>

      </Section>

    </>
  )
}
  
