import React from 'react'
import LoanAmountInput from './LoanAmountInput'
import InterestRateInput from './InterestRateInput'
import LoanTermInput from './LoanTermInput'
import PaymentInfo from './PaymentInfo'
import '../css/LoanCalculator.css'



function LoanCalculator() {
  return (
    <section className='loan-calculator-wrapper'>
    <div className='instructions-wrapper'>
    <p>Add a loan amount, interest rate, and loan term. Once all three fields have been filled out, the app will calculate the monthly payment and total interest.</p>
    </div>
      <form className='calculator-wrapper'>
        <LoanAmountInput />
        <InterestRateInput />
        <LoanTermInput />
      </form>
      <PaymentInfo />
    </section>
  )
}

export default LoanCalculator
