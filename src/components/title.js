import styled from 'styled-components';
import * as variables from './variables.js';
import StyledHeader from './styledHeader.js';

const Title = styled(StyledHeader)`
  // Position
  position: relative;
  // Display and Box Model
  background:
    radial-gradient(
      at 50% 100%,
      ${variables.colors.color.white.w_20} 0%,
      transparent 70%
    );
  background-blend-mode: overlay;
  height: auto;
  justify-self: center;
  line-height: 1;
  max-width: 80rem;
  min-width: 40rem;
  padding: ${variables.sizes.gapWidth};
  // Typography
  font-size: ${variables.fonts.sizes.h5};
  text-shadow: 0.03em 0.03em ${variables.colors.color.black.b_10};
  text-transform: uppercase;

  &:after {
  // Position
  position: absolute;
  top: 100%;
  right: 0%;
  background:
    radial-gradient(
      at 50% 0%,
      ${variables.colors.color.black.b_5} 0%,
      transparent 100%
    ),
    radial-gradient(
      at 50% 0%,
      ${variables.colors.color.black.b_2} 0%,
      transparent 50%
    );
  content: '';
  height: 25%;
  width: 100%;
  }
`
export default Title;
