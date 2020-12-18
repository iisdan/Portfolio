import styled from 'styled-components';

export const Container = styled.div<{ size: 's' | 'l' }>`
  font-size: ${(props) => props.size === 'l' ? 45 : 25}px;
  text-align: center;
  font-family: anton;
`;
