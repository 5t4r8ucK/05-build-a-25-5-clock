import styled, { css } from 'styled-components';
import Button from './button.js';

const PlaybackContainer = styled.section`
  // Display and Box Model
`;

const Playback = () => {

  return (
    <PlaybackContainer id='playback'>
      <Button id='start_stop'>
        Start/Stop
      </Button>
      <Button id='reset'>
        Reset
      </Button>
    </PlaybackContainer>
  );
};

export default Playback;