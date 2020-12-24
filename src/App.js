import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <nav>
        <h1>Fun Fact in JS</h1>
      </nav>
      <main>
        <section className="fact-section">
          <p>Enter your birth year</p>
          <input
            className="input-section"
            type="number"
            placeholder="Your birth year"
          />
          <button className="fact-button">Get a fun fact!</button>
          <p className="output-section"></p>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
