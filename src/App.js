import React from 'react';
import './css/variables.css';
import './css/main.css';
import LoanCalculator from './components/LoanCalculator';
import Header from './components/Header'

function App() {
  return (
    <main className="App">
      <Header />
      <LoanCalculator />
    </main>
  );
}

export default App;
