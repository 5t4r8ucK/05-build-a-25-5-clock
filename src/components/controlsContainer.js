import styled, { css } from 'styled-components';

const ControlsContainer = styled.div`
  // Display and Box Model
  display: grid;
  grid-template-areas:
    'label label label'
    'decrement length increment';
  flex-direction: row;

  &#session-controls {
    // Display and Box Model
    grid-area: session-controls;
  }

  &#break-controls {
    // Display and Box Model
    grid-area: break-controls;
  }

  &#playback-controls {
    // Display and Box Model
    grid-area: playback-controls;
  }
`;

export default ControlsContainer;