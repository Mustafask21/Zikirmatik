import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sevap, setSevap] = useState("")


  const saveData=()=>{

    setSevap(count);
  
    const notfi=document.querySelectorAll(".notfi");
    notfi.forEach(element => {
      element.style.display="block";})
    
  }



const removeData=()=>{
  setCount(0);
  setSevap("0");

  const notfi=document.querySelectorAll(".notfi");
  notfi.forEach(element => {
    element.style.display="none";})
  
}

  return (
    <>
      <p>ZikirMatik: {count}</p>
      <div><button onClick={()=>(setCount(count+1))} className='button'></button></div>
      <button className='sifirlaButton' onClick={removeData}>Sıfırla</button>
      <button className='sifirlaButton' onClick={saveData}>Kaydet</button>
      <p className='notfi'>Tebrikler : {sevap}  Sevap Kazandınız</p>
    </>
  )
}

export default App
