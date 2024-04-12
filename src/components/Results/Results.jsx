import React from 'react'
import './Results.css'

function Results({ billAmount, tipPercentage, numberOfPeople, onReset, removeActive }) {
  const handleResetClick = () => {
    onReset()
    removeActive()
  }

  const tipAmount = (billAmount * tipPercentage) / 100 / numberOfPeople
  const totalPerPerson = (billAmount / numberOfPeople) + tipAmount

  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>${tipAmount.toFixed(2)}</h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>${totalPerPerson.toFixed(2)}</h3>
        </div>
      </div>
      <button type="button" id="reset-button" className="reset-button" onClick={handleResetClick}>RESET</button>
    </div>
  )
}

export default Results