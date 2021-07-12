import styled from 'styled-components';
import * as variables from './variables.js';
import Break from './break.js';
import Playback from './playback.js';
import Session from './session.js';

const ControlsSection = styled.section`
  &#controls {
    // Display and Box Model
    display: grid;
    gap: ${variables.sizes.gapWidth};
    grid-template-areas:
      'break-controls session-controls'
      'playback-controls playback-controls';
    grid-template-columns: auto auto;
  }
`;

const Controls = () => {
  return (
    <ControlsSection id='controls'>
      <Break />
      <Session />
      <Playback />
    </ControlsSection>
  );
};

export default Controls;