import React from 'react'
import TipOptions from '../TipOptions/TipOptions'
import './BillInput.css'

function BillInput({ billAmount, onBillChange, tipPercentage, onTipChange, numberOfPeople, onPeopleChange }) {
  const handleBillInputChange = (e) => {
    onBillChange(parseFloat(e.target.value))
  };
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input 
          className="input-bill" 
          id="input-bill" 
          type="number" 
          value={billAmount} 
          min="0" 
          onChange={handleBillInputChange} 
        />
      </label>
      <h2>Select Tip %</h2>
      <TipOptions 
        tipPercentage={tipPercentage} 
        onTipChange={onTipChange} 
      />
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input 
          id="input-people" 
          className="input-people" 
          type="number" 
          value={numberOfPeople} 
          min="1" 
          onChange={(e) => onPeopleChange(parseInt(e.target.value))} 
        />
      </label>
    </div>
  )
}

export default BillInput