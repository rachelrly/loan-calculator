import React, { useEffect, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'
import { useCalculatePayments } from '../hooks/hooks'

function PaymentInfo() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  //re-render result page when data changes
  useEffect(() => { }, [loanAmt, loanTerm, interestRate])
  return (
    <div className='payment-info-wrapper'>
      <p>{useCalculatePayments()}</p>
    </div>
  )
}

export default PaymentInfo
