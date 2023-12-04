import Cliker from './Cliker.js'


export default function App()
{
  const [hasClicker, setHasClicker] = useState(true)

  const toggleCickerClick = () => 
  {
    setHasClicker(!hasClicker)
  }

  return <>
    <button onClick={ toggleCickerClick }>Toggle clicker</button>
  <Cliker/> 
  </>
} 