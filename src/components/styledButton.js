import styled from 'styled-components';
import * as variables from './variables.js';

export const StyledButton = styled.button`
  // Display and Box Model
  background: transparent;
  background-blend-mode: overlay;
  box-shadow:
    5px 5px 10px 2px rgba(255, 255, 255, 0.05) inset,
    -5px -5px 10px 2px  rgba(0, 0, 0, 0.05) inset,
    5px 5px 10px 0 rgba(0, 0, 0, 0.25),
    -5px -5px 10px 0 rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  min-height: ${variables.sizes.column_width};
  // Typography
  font-family: ${variables.fonts.stack.sansSerif};
  color: ${variables.colors.color.white.w_100};
  // Other
  cursor: pointer;
  transition: all 0.2s ease;
  grid-area: ${props => props.gridArea};

  &:hover {
  // Display and Box Model
  box-shadow:
    5px 5px 10px 2px rgba(0, 0, 0, 0.05) inset,
    -5px -5px 10px 2px  rgba(255, 255, 255, 0.05) inset,
    5px 5px 10px 0 rgba(0, 0, 0, 0.25),
    -5px -5px 10px 0 rgba(255, 255, 255, 0.2);
  }

  &:active {
  // Display and Box Model
  box-shadow:
    inset 5px 5px 10px 0 rgba(0, 0, 0, 0.25),
    inset -5px -5px 10px 0 rgba(255, 255, 255, 0.2);
  }
`;

export const SquareButton = styled(StyledButton)`
  // Display and Box Model
  align-self: center;
  width: ${variables.sizes.column_width};
  height: ${variables.sizes.column_width};
`

export const IncrementButton = styled(SquareButton)`
  // Display and Box Model
  grid-area: increment;
  justify-self: left;
`

export const DecrementButton = styled(SquareButton)`
  // Display and Box Model
  grid-area: decrement;
  justify-self: right;
`

export default StyledButton;