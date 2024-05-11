import React from 'react'
import { CalendarJS } from './components/CalendarJS'
import './App.css';
const App = () => {
  return (
    <>
    <div className="calendar-container">
      <h1 className='title-h1'>Calendario JavaScript</h1>
      <div className="calendar-border">

          <CalendarJS />
      </div>
    </div>
    </>
  )
}

export default App