import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: black;
  background-image: url(${require('../../assets/space.svg')});
  background-size; contain;
  background-position: center center;
  display: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -2;
  position: relative;
`;
