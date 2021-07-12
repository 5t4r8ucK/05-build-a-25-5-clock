import styled from 'styled-components';
import * as variables from './variables.js';
import StyledHeader from './styledHeader.js';

const Label = styled(StyledHeader)`
  // Typography
  font-size: ${variables.fonts.sizes.h5};
  margin: 3rem 0 1.38rem;
  // Other
  opacity: 0.5;
`;

export default Label;