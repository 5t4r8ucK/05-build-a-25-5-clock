import styled, { css } from 'styled-components';

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
      <div id='break-controls'>
        <div id='break-label'>
          Break Length
        </div>
        <button id='break-decrement'>
          decrease
        </button>
        <div id="break-length">
          5
        </div>
        <button id='break-increment'>
          increase
        </button>
      </div>
      <div id='session-controls'>
        <div id='session-label'>
          Session Length
        </div>
        <button id='session-decrement'>
          decrease
        </button>
        <div id="session-length">
          25
        </div>
        <button id='session-increment'>
          increase
        </button>
      </div>
      <div id='timer-controls'>
        <button id='start_stop'>
          Start/Stop
        </button>
        <button id='reset'>
          Reset
        </button>
      </div>
    </ControlsContainer>
  );
};

export default Controls;