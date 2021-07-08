import styled, { css } from 'styled-components';
import Break from './break.js';
import Playback from './playback.js';
import Session from './session.js';

const ControlsContainer = styled.section`
  // Display and Box Model
  display: grid;
  grid-template-areas:
    'break-controls session-controls'
    'timer-controls timer-controls';
`;

const Controls = () => {

  return (
    <ControlsContainer id='controls'>
      <Break />
      <Session />
      <Playback />
    </ControlsContainer>
  );
};

export default Controls;