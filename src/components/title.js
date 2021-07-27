import styled from 'styled-components';
import * as variables from './variables.js';
import StyledHeader from './styledHeader.js';

const Title = styled(StyledHeader)`
  // Display and Box Model
  border-width: 0 0 ${variables.sizes.borderWidth} 0;
  border-style: solid;
  border-bottom-color: ${variables.colors.color.white.w_10};
  height: auto;
  justify-self: center;
  line-height: 1;
  max-width: 80rem;
  padding-bottom: ${variables.sizes.gapWidth};
  // Typography
  font-size: ${variables.fonts.sizes.h5};
  text-shadow: 0.03em 0.03em ${variables.colors.color.black.b_10};
  text-transform: uppercase;
`
export default Title;