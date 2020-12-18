import styled from 'styled-components';

export const FlexRow = styled.div<{ horizontalAlign?: 'left' | 'center' | 'right'; verticalAlign?: 'top' | 'center' | 'bottom'; }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: ${(props) => props.horizontalAlign || 'center'};
  justify-content: ${(props) => props.verticalAlign || 'center'};
  flex-wrap: wrap;
`;
