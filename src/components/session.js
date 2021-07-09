import styled, { css } from 'styled-components';
import Button from './button.js';
import Label from './label.js';
import ControlsContainer from './controlsContainer';

const Session = () => {

  return (
    <ControlsContainer id='session-controls'>
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
    </ControlsContainer>
  );
};

export default Session;