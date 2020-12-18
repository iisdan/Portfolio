import styled from 'styled-components';

export const Container = styled.div<{ level: 'error' | 'message' }>`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${(props) => props.level === 'error' ? '#E23434' : 'grey'};
`;
