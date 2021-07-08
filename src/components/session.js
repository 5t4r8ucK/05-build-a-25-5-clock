import styled, { css } from 'styled-components';
import Button from './button.js';
import Label from './label.js';
import Number from './number.js';

const SessionContainer = styled.section`
  // Display and Box Model
`;

const Session = () => {

  return (
    <SessionContainer id='session-controls'>
      <Label id='session-label'>
        Session Length
      </Label>
      <Button id='session-decrement'>
        decrease
      </Button>
      <Number id="session-length">
        25
      </Number>
      <Button id='session-increment'>
        increase
      </Button>
    </SessionContainer>
  );
};

export default Session;