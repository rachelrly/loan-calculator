import React, {useContext} from 'react'
import {LoanContext} from '../contexts/LoanContext'

export default function MonthYearToggle(){
    const {isMonth, dispatch} = useContext(LoanContext)
    const monthClass = isMonth ? 'toggle-button toggle-months toggle-active' : 'toggle-button toggle-months'
    const yearClass = !isMonth ? 'toggle-button toggle-years toggle-active' : 'toggle-button toggle-years'

    const handleDispatch = (e, bool) =>{
        e.preventDefault()
        dispatch({
            type: 'setLoanTermType',
            payload: {value: bool}
        })
    }
    return(
        <div className='toggle-wrapper'>
            <button 
            className={monthClass}
            onClick={(e, bool)=>handleDispatch(e, true) }
            >Months</button>
            <button 
            className={yearClass}
            onClick={(e, bool)=>handleDispatch(e, false) }
            >Years</button>
        </div>
    )
}