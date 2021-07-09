import styled, { css } from 'styled-components';
import Button from './button.js';
import ControlsContainer from './controlsContainer';

const Playback = () => {

  return (
    <ControlsContainer id='playback-controls'>
      <Button id='start_stop'>
        Start/Stop
      </Button>
      <Button id='reset'>
        Reset
      </Button>
    </ControlsContainer>
  );
};

export default Playback;