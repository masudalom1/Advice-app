import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [advice, setAdvice] = useState('');

  const fatchAdvice=()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      setAdvice(response.data.slip.advice);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
   fatchAdvice();
  },[]);

  return (
   <>
   <div className="adviceBox">
    <h3>{advice}</h3>
    <button onClick={fatchAdvice}>Get New Advice</button>
   </div>
   
   </>
  )
}

export default App
