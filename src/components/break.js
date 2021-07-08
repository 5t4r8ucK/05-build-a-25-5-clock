import styled, { css } from 'styled-components';
import Button from './button.js';
import Label from './label.js';
import Number from './number.js';

const BreakContainer = styled.section`
  // Display and Box Model
`;

const Break = () => {

  return (
    <BreakContainer id='break-controls'>
      <Label id='break-label'>
        Break Length
      </Label>
      <Button id='break-decrement'>
        decrease
      </Button>
      <Number id="break-length">
        5
      </Number>
      <Button id='break-increment'>
        increase
      </Button>
    </BreakContainer>
  );
};

export default Break;