import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Virtualizedlist from './components/virtualizedlist';
const LIST = Array.from({length: 1000}, (val,index)=>{
  return index+1
});
function App() {
  return (
    <div className="p-4">
      <Virtualizedlist list={LIST} height={400} width={300} item_height={35}/>
    </div>
  )
}

export default App
