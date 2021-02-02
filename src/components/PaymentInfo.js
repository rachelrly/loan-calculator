import React, { useEffect, useContext } from 'react'
import { LoanContext } from '../contexts/LoanContext'


function PaymentInfo() {
  const { loanAmt, loanTerm, interestRate } = useContext(LoanContext)
  //re-render result page when data changes
  useEffect(() => { }, [loanAmt, loanTerm, interestRate])
  return (
    <div className='payment-info-wrapper'>

    </div>
  )
}

export default PaymentInfo
