# [Loan Calculator](https://loan-calculator-two.vercel.app/)

## How to use

To calculate monthly payments and total interest on a loan, input the loan amount, the interest rate, and the term in months. To use years instead of months, use the toggle button. 

All three fields only take in integers and floats. There is basic validation based on the field context, i.e. interest rate cannot be greater than 100%. 
 
Once all three fields are filled, the app will calculate the monthly payment and display it on the screen.

Try out the live app [here](https://loan-calculator-two.vercel.app/).

## Images

![](/screenshots/loan-calc-months.png) ![](/screenshots/loan-calc-years.png)

## Tech

- React.js
- CSS3

## Codebase

### Components

- LoanCalculator.js (wraps calculator and results)
- Calculator.js
- LoanAmountInput.js
- InterestRateInput.js
- LoanTermInput.js
- MonthYearToggle.js
- PaymentInfo.js (displays results)
- Header.js

### Context

`LoanContext.js` contains the context instance and a component that renders the context provider.

`LoanContextProvider` has a reducer, using the `useReducer()` hook, that has a dispatch to change the three inputs and the toggle buttons for month/year. 

This project uses a reducer to keep the closely tied state in sync with itself. 

### Hooks

The folder `hooks` contains one file, `hooks.js`, which contains named exports for several custom hooks that work with the loan calculations.

#### useCalculatePayments()

This hook uses the values from the `LoanContext` to calculate the monthly payment and total interest. 

The monthly payment is calculated with this formula: `r(PV) / 1 - (1+r)^ -n`. 

The total interest is the monthly payment x loan term - principal.

Decimals are rounded to the second place.


#### useLargeNumberWithCommas(number)

This hook takes in a large numbers and returns a string with commas every third place from the end. If the number includes a decimal point, the commas start to the left of the decimal point.

### CSS

#### varaibles.css

This file contains all CSS variables for the project and is imported in App.js

#### main.css

This file contains the styles for DOM elements such as `input` and `section`

#### Component specific CSS

The other CSS files style specific components and their given children. These are largely based on class names. 

- LoanCalculator.css
- PaymentInfo.css