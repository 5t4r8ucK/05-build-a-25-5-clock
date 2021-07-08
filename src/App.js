import './App.css';

function App() {
  return (
    <article id='clock'>
      <section id='title'>
        Pomodoro Timer
      </section>
      <section id='clock-controls'>
        <div className='length-control'>
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
        <div className='length-control'>
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
      </section>
      <section id='timer'>
        <div id='timer-label'>
          Session
        </div>
        <div id='time-left'>
          25:00
        </div>
        <div id='timer-controls'>
          <button id='start_stop'>
            Start/Stop
          </button>
          <button id='reset'>
            Reset
          </button>
        </div>
      </section>
    </article>
  );
}

export default App;
