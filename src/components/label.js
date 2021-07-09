import styled, { css } from 'styled-components';

const Label = styled.div`
  // Typography
  text-align: center;

  &#break-label{
    // Display and Box Model
    grid-area: label;
  }

  &#session-label {
    // Display and Box Model
    grid-area: label;
  }
`;

export default Label;