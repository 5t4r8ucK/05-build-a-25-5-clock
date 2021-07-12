import styled from 'styled-components';
import * as variables from './variables.js';

export const StyledButton = styled.button`
  // Display and Box Model
  background-color: ${variables.colors.color.white.w_10};
  min-height: ${variables.sizes.column_width};
  // Typography
  font-family: ${variables.fonts.stack.sansSerif};
  color: ${variables.colors.color.white.w_100};
`;

export const SquareButton = styled(StyledButton)`
  // Display and Box Model
  width: ${variables.sizes.column_width};
  height: ${variables.sizes.column_width};
`

export default StyledButton;