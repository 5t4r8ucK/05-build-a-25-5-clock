import styled from 'styled-components';

const ControlsContainer = styled.div`
  // Display and Box Model
  display: grid;
  grid-template-areas:
    'label label label'
    'decrement length increment';
  flex-direction: row;
`;

export default ControlsContainer;