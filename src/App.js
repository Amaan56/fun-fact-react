import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1>Fun Fact in JS</h1>
      </nav>
      <main>
        <section class="fact-section">
          <p>Enter your birth year</p>
          <input
            class="input-section"
            type="number"
            placeholder="Your birth year"
          />
          <button class="fact-button">Get a fun fact!</button>
          <div class="output-section-1 output-section"></div>
          <br />
          <div class="output-section-2 output-section"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
