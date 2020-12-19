import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  color: white;
  background-color: #203126;
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.2s;
  min-width: 150px;
  text-align: center;
  &:hover {
    background-color: #334E3C;
  }
`;
