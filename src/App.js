import { useState } from 'react';
import { Fragment } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [inputYear, setInputYear] = useState('');

  const getFact = () => {
    if (inputYear === '') {
      setFact('');
    }
    let isPrime = checkPrime(inputYear);
    let isLeapYear = checkLeapYear(inputYear);

    if (isPrime && isLeapYear) {
      setFact(setFact(`Your birth year is a prime number and a leap year.`));
    } else if (isPrime && !isLeapYear) {
      setFact(`Your birth year is a prime number but not a leap year.`);
    } else if (!isPrime && isLeapYear) {
      setFact(`Your birth year is a not prime number  but a leap year.`);
    } else {
      setFact(`Your birth year is a neither a prime number nor a leap year.`);
    }
  };

  const checkPrime = (year) => {
    console.log(year);
    let check = true;

    if (year === 0 || year === 1) {
      check = false;
    } else {
      for (let i = 2; i < year; i++) {
        if (year % i === 0) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  const checkLeapYear = (year) => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <nav>
        <h1>Fun Fact in React</h1>
      </nav>
      <main>
        <section className="fact-section">
          <p>Enter your birth year</p>
          <input
            className="input-section"
            type="number"
            placeholder="Your birth year"
            onChange={(e) => setInputYear(e.target.value)}
          />
          <button onClick={getFact} className="fact-button">
            Get a fun fact!
          </button>
          <p className="output-section">{fact}</p>
        </section>
      </main>
    </Fragment>
  );
}

export default App;
