import * as React from 'react';
import { Container } from './styles';
import { Paragraph } from '../Paragraph';
import { Row } from '../Row';
import { Spacer } from '../Spacer';
import { Image } from '../Image';
import { Column } from '../Column';

interface WorkProps {
  logo: React.ReactNode;
  description: React.ReactNode | string;
}

export function Work(props: WorkProps) {
  return (
    <Container>
      <Column horizontalAlign="center">
        <Row horizontalAlign={'center'}>
          {props.logo}
        </Row>
        <Spacer size="s" />
        <Image width={800} src={require('../../assets/macbook.png')} />
        <Spacer size="s" />
        <Paragraph>
          {props.description}
        </Paragraph>
      </Column>
    </Container>
  )
}
  
