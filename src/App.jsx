import React, { useState } from 'react'
import Header from './components/Header/Header'
import BillInput from './components/BillInput/BillInput'
import Results from './components/Results/Results'
import './App.css'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(1)
  const [activePercentage, setActivePercentage] = useState(null)

  const handleBillChange = (amount) => {
    setBillAmount(amount)
  }

  const handleTipChange = (percentage) => {
    setTipPercentage(percentage)
    setActivePercentage(percentage)
  }

  const handlePeopleChange = (people) => {
    setNumberOfPeople(people)
  }

  const handleReset = () => {
   
    setBillAmount(0);
    setTipPercentage(0)
    setNumberOfPeople(1)
    setActivePercentage(null)
  }

  const removeActive = () => {
    const buttons = document.querySelectorAll('.percentage-button');
    buttons.forEach(element => {
      element.classList.remove('active')
    })
  }

  return (
    <>
      <Header />
      <div className="general-wrapper">
        <BillInput 
          billAmount={billAmount} 
          onBillChange={handleBillChange} 
          tipPercentage={tipPercentage} 
          onTipChange={handleTipChange} 
          numberOfPeople={numberOfPeople} 
          onPeopleChange={handlePeopleChange} 
        />
        <Results 
          billAmount={billAmount} 
          tipPercentage={tipPercentage} 
          numberOfPeople={numberOfPeople} 
          onReset={handleReset} 
          removeActive={removeActive} 
        />
      </div>
    </>
  )
}

export default App