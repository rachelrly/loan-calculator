import React, { useEffect, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { useCalculatePayments, useLargeNumberWithCommas, useCalculateTotalInterest } from '../hooks/hooks'
import '../css/PaymentInfo.css'


function PaymentInfo() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  //re-render result page when data changes
  useEffect(() => { }, [loanAmt, loanTerm, interestRate])

  const {monthlyPayment, totalInterest} = useCalculatePayments()
  return (
    <div className='payment-info-wrapper'>
      <h2 className='monthly-payment'>
        <span className='monthly-payment-label'>Monthly payment: </span>
        <div className='monthly-payment-value'>
          <span >${useLargeNumberWithCommas(monthlyPayment)}</span>
        </div>
      </h2>
      <span className='total-principal highlight-wrapper'>
        <span className='total-principal-label'>Total principal paid: </span>
        <div className='total-principal-value'>
          <span >${useLargeNumberWithCommas(loanAmt)}</span>
        </div>
      </span>
      <span className='total-interest highlight-wrapper'>
        <span className='total-interest-label'>Total interest paid: </span>
        <div className='total-interest-value'>
          <span >${useLargeNumberWithCommas(totalInterest)}</span>
        </div>
      </span>

    </div>
  )
}

export default PaymentInfo
