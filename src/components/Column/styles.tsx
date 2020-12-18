import styled from 'styled-components';

export const FlexColumn = styled.div<{ horizontalAlign?: 'left' | 'center' | 'right'; verticalAlign?: 'top' | 'center' | 'bottom'; }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.horizontalAlign || 'center'};
  justify-content: ${(props) => props.verticalAlign || 'center'};
`;
