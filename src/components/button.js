import styled, { css } from 'styled-components';

const Button = styled.button`

  &#break-decrement{
    // Display and Box Model
    grid-area: decrement;
  }

  &#session-decrement {
    // Display and Box Model
    grid-area: decrement;
  }

  &#break-increment {
    // Display and Box Model
    grid-area: increment;
  }

  &#session-increment  {
    // Display and Box Model
    grid-area: increment;
  }
`;

export default Button;