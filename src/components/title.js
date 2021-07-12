import styled from 'styled-components';
import * as variables from './variables.js';
import StyledHeader from './styledHeader.js';

const Title = styled(StyledHeader)`
  &#title {
    // Typography
    font-size: ${variables.fonts.sizes.h4};
    text-shadow: 0.03em 0.03em ${variables.colors.color.black.b_10};
    text-transform: uppercase;
  }
`
export default Title;