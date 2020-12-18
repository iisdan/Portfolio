import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  -webkit-backdrop-filter: blur(7px);
  z-index: 99;
`;

export const NavItem = styled.div`
  min-width: 140px;
  color: white;
  opacity: 0.6;
  transition: 0.2s;
  cursor: pointer;
  padding: 20px;
  font-size: 16px;
  text-align: center;
  &:hover {
    opacity: 1;
  }
`;

