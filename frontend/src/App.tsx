import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sdata, ssetData] = useState('');

  useEffect(()=>{
    const fn = async() => {
      const res = await fetch("http://localhost:8000/nalla")
      const data  = await res.json();
      ssetData(data);
      console.log(data);
    }
    fn();
  },[])

  return (
   <> </>
  )
}

export default App
