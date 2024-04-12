import React, { useState } from 'react'
import './TipOptions.css'

function TipOptions({ onTipChange }) {
  const percentages = [5, 10, 15, 25, 50]
  const [customPercentage, setCustomPercentage] = useState(0)
  const [activePercentage, setActivePercentage] = useState(null)

  const handlePercentageClick = (percentage) => {
    onTipChange(percentage)
    setActivePercentage(percentage)
  };

  const handleCustomChange = (event) => {
    const value = parseInt(event.target.value)
    setCustomPercentage(value)
    onTipChange(value)
    setActivePercentage(null)
    removeActive()
  }

  const removeActive = () => {
    const buttons = document.querySelectorAll('.percentage-button');
    buttons.forEach((button) => {
      button.classList.remove('active')
    })
  }

  return (
    <ul>
      {percentages.map((percentage) => (
        <li key={`percentage-${percentage}`} id={`percentage-${percentage}`}>
          <button 
            type="button" 
            className={`percentage-button ${percentage === activePercentage ? 'active' : ''}`} 
            value={percentage}
            onClick={() => handlePercentageClick(percentage)}
          >
            {percentage}%
          </button>
        </li>
      ))}
      <li>
        <input
          type="number"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          value={customPercentage}
          onChange={handleCustomChange}
        />
      </li>
    </ul>
  );
}

export default TipOptions;