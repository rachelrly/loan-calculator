# Loan Calculator

## How to use

Type in a value for each of the three fields. Once all three fields are filled with positive integers, the app will calculate the monthly payment and display it on the screen.

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

#### useCalculatePayments()

This hook takes the loan amount, loan term, and interest rate from context, and returns the payment calculated with this formula: `r(PV) / 1 - (1+r)^ -n`. Decimals are rounded to the second place.

#### useCalculateTotalInterest()

This hook returns the total interest paid over time. Decimals are rounded to the second place. 

#### useLargeNumberWithCommas(number)

This hook takes in a large numbers and returns a string with commas every third place from the end. If the number includes a decimal point, the commas start to the left of the decimal point.

### Utils

### CSS
