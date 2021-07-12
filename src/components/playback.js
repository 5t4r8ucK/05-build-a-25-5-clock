import styled from 'styled-components';
import * as variables from './variables.js';
import StyledButton from './styledButton.js';
import ControlsContainer from './controlsContainer';

const PlaybackControls = styled(ControlsContainer)`
  &#playback-controls {
    // Display and Box Model
    gap: ${variables.sizes.gapWidth};
    grid-area: playback-controls;
    grid-template-areas:
      'start_stop reset volume';
    flex-direction: row;
  }
`

const PlaybackButton = styled(StyledButton)`
  &#reset {
    // Display and Box Model
    grid-area: reset;
  }
  &#start_stop {
    // Display and Box Model
    grid-area: start_stop;
  }
  &#volume {
    // Display and Box Model
    grid-area: volume;
  }
`

const Playback = () => {
  return (
    <PlaybackControls id='playback-controls'>
      <PlaybackButton id='start_stop'>
        <i className="fas fa-play"></i>
      </PlaybackButton>
      <PlaybackButton id='reset'>
        <i className="fas fa-redo"></i>
      </PlaybackButton>
      <PlaybackButton id='volume'>
        <i className="fas fa-volume-up"></i>
      </PlaybackButton>
    </PlaybackControls>
  );
};

export default Playback;