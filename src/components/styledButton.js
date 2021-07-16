import styled from 'styled-components';
import * as variables from './variables.js';

export const StyledButton = styled.button`
  // Display and Box Model
  background-color: ${variables.colors.color.white.w_10};
  min-height: ${variables.sizes.column_width};
  // Typography
  font-family: ${variables.fonts.stack.sansSerif};
  color: ${variables.colors.color.white.w_100};
  // Other
  cursor: pointer;
  transition: background-color 0.1s ease-out;

  &:hover {
  // Display and Box Model
    background-color: ${variables.colors.color.white.w_20};
  }

  &:active {
  // Display and Box Model
    background-color: ${variables.colors.color.white.w_30};
  }
`;

export const SquareButton = styled(StyledButton)`
  // Display and Box Model
  width: ${variables.sizes.column_width};
  height: ${variables.sizes.column_width};
`

export default StyledButton;