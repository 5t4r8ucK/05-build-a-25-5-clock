import styled, { css } from 'styled-components';
import Button from './button.js';
import Label from './label.js';
import Length from './length.js';
import ControlsContainer from './controlsContainer';

const Break = () => {

  return (
    <ControlsContainer id='break-controls'>
      <Label id='break-label'>
        Break Length
      </Label>
      <Button id='break-decrement'>
        -
      </Button>
      <Length id="break-length">
        5
      </Length>
      <Button id='break-increment'>
        +
      </Button>
    </ControlsContainer>
  );
};

export default Break;