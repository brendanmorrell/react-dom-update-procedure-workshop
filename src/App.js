import React, { useState } from 'react'

const appendTextNode = () => {
  const root = document.getElementById('count')
  const newContent = document.createTextNode("I'm appended to the dom. I'll be here forever!!!!")
  root.appendChild(newContent)
}

const App = () => {
  const [count, changeCount] = useState(0)
  return (
    <div>
      <div>Counter:</div>
      <h1 id="count">{count}</h1>
      <button onClick={() => changeCount(count + 1)}>+</button>
      <button onClick={() => changeCount(count - 1)}>-</button>
      <button onClick={appendTextNode}>add something to the dom</button>
    </div>
  )
}

export default App
