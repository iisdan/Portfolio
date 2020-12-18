import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-size; contain;
  background-image: url(${require('../../assets/space.svg')});
  background-position: center center;
  display: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -5;
  position: relative;
  width: 100vw;
  top: 0px;
  left: 0px;
`;
