import { useEffect, useState } from "react"

export default function Cliker()
{
  const [count, setCount] = useState(0)

  useEffect(() =>
  {
    const savedCount = parseInt(localStorage.getItem('count'))
    console.log(savedCount)
  }, [])

  useEffect(() => 
  {
    localStorage.setItem('count', count) //Javascipt API
  }, [count])

  const buttonClick = () => 
  {
    setCount((value) => value + 1)
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