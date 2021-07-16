import styled from 'styled-components';
import * as variables from './variables.js';

const Length = styled.div`
  // Display and Box Model
  display: flex;
  flex-direction: column;
  justify-content: center;
  // Typography
  font-family: ${variables.fonts.stack.serif};
  line-height: 1;
  text-align: center;
  text-shadow: 0.03em 0.03em ${variables.colors.color.black.b_10};
`;

export default Length;