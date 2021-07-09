import styled, { css } from 'styled-components';
import Button from './button.js';
import Label from './label.js';
import Length from './length.js';
import ControlsContainer from './controlsContainer';

const Session = () => {

  return (
    <ControlsContainer id='session-controls'>
      <Label id='session-label'>
        Session Length
      </Label>
      <Button id='session-decrement'>
        -
      </Button>
      <Length id="session-length">
        25
      </Length>
      <Button id='session-increment'>
        +
      </Button>
    </ControlsContainer>
  );
};

export default Session;