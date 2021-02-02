import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoanContextProvider from './contexts/LoanContext'

ReactDOM.render(
  <LoanContextProvider>
    <App />
  </LoanContextProvider>,
  document.getElementById('root')
);
