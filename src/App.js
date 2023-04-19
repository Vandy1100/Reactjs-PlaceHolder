import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Checked from './components/LoadindDataAPI';
function App() {
  let [loading,setLoading]=useState([])
  let [checked,setChecked]=useState([true])
  let getData=()=>{
    fetch("https://api.escuelajs.co/api/v1/categories")
    .then(resp=>resp.json())
    .then(req=>{
      setChecked(false)
      setLoading(req)
    })
  }
  useEffect(()=>getData()
  ,[])
  return (
    <>
       <Checked loadingdata={checked} getapi={loading}/>
    </>
  );
}

export default App;
