import { useState } from "react"

export default function Cliker()
{
  const countState = useState(0)

  const count = countState[0]
  const setCount = countState[1]

  const buttonClick = () => 
  {
    setCount(count + 1)
    console.log('Button has been clicked')
  }

  return <div>
  <div>
    Click count : {count}
  </div>
  <button onClick={buttonClick}>
    Click me 
  </button>
  </div>
}