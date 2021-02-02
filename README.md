# Loan Calculator

## Images

## Tech

- React.js
- CSS3

## Codebase

### Components

- LoanCalculator.js (wraps calculator and results)
- Calculator.js
- PaymentInfo.js
- Header.js

### Context

`LoanContext.js` contains the context instance and a component that renders the context provider.

`LoanContextProvider` has a reducer, using the `useReducer()` hook, that

### Hooks

The folder `hooks` contains one file, `hooks.js`, which contains named exports for several custom hooks that work with the loan calculations.

This file also contains a private function called by the custom hooks to validate input against a numeric regex.

#### useCalculatePayments()

This hook takes the loan amount, loan term, and interest rate from context, and returns the payment calculated with this formula: `r(PV) / 1 - (1+r)^ -n`. Decimals are rounded to the second place.

#### use

### CSS
