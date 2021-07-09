import styled, { css } from 'styled-components';
import Break from './break.js';
import Playback from './playback.js';
import Session from './session.js';

const ControlsWrapper = styled.section`
  // Display and Box Model
  display: grid;
  grid-template-areas:
    'break-controls session-controls'
    'playback-controls playback-controls';
  grid-template-columns: 1fr 1fr;
`;

const Controls = () => {

  return (
    <ControlsWrapper id='controls'>
      <Break />
      <Session />
      <Playback />
    </ControlsWrapper>
  );
};

export default Controls;