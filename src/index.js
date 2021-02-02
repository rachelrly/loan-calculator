import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoanContextProvider from './contexts/LoanContextProvider'

ReactDOM.render(
  <LoanContextProvider>
    <App />
  </LoanContextProvider>,
  document.getElementById('root')
);
