import styled from 'styled-components';
import * as variables from './variables.js'

const StyledArticle = styled.article`
  // Display and Box Model
  display: grid;
  height: 100vh;
  padding: ${variables.sizes.column_width};
  width: 100vw;
`

export default StyledArticle;