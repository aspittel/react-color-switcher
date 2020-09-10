import React, { useState } from 'react'

import SwitchColorButton from './SwitchColorButton'

import './App.css'

function App () {
  const [color, setColor] = useState('')

  const colors = ['red', 'blue', 'yellow', 'green']
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Picker</h1>
        {colors.map(currentColor => <SwitchColorButton color={currentColor} setColor={setColor} key={currentColor} />)}
      </div>
    </div>
  )
}

export default App
