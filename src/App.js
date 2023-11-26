import React from 'react'
import './index.css'
import Game from './Game'
import Header from './header'
import { levels } from './data'
export default function App() {
   const [niv,setNiv]=React.useState(0)

   function addNiv(levelNum){
    setNiv(levelNum)
   }
  return(
     <>
      <Header/>
    <div className='app'>
      <Game stage={levels[niv]} stages={levels}  niv={niv} funcNiv={addNiv}/>

    </div>
    </>
  )
 
  
}