import React from 'react'
import Calculator from './Calculator'
import PaymentInfo from './PaymentInfo'

function LoanCalculator() {

  return (
    <section className='loan-calculator-wrapper'>
      <Calculator />
      <PaymentInfo />
    </section>
  )
}

export default LoanCalculator
