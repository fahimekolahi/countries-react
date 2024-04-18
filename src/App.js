import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  const [countriesList , setCountriesList] = useState([])

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=> res.json())
.then(result=>setCountriesList(result))
.catch(err=>console.log(err))




},[])

  return (
  
<>

















</>
  );
}

export default App;
