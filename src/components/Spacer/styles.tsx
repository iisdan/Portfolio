import styled from 'styled-components';

function getSize(size: 'xs' | 's' | 'm' | 'l' | 'xl') {
  const sizes = {
    'xs': 15,
    's': 50,
    'm': 100,
    'l': 150,
    'xl': 200,
  }
  return sizes[size];
}

export const Container = styled.div<{ size: 'xs' | 's' | 'm' | 'l' | 'xl' }>`
  height: ${(props) => getSize(props.size)}px;
  width: ${(props) => getSize(props.size)}px;
`;
