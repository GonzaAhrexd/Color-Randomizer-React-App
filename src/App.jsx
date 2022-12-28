import React from 'react'
import { useState } from 'react'
import RandomColors from './components/RandomColors'
import CantidadTarjetas from './components/CantidadTarjetas'
function App() {

  const [cantidad, setCantidad] = useState(1)


  function mostrarTarjetas(){
      let tarjetas = []
    for (let index = 0; index < cantidad; index++) {
      tarjetas.push(<RandomColors></RandomColors>)
    }
        return tarjetas;
    }
    const less = ()=>{
      if(cantidad>1)
      setCantidad(cantidad-1)
    }
  const more = ()=>{
    if(cantidad<24)
    setCantidad(cantidad+1)
  }

  return (
    <div className="App">

      <h1>Color randomizer</h1>
     <div className='container'>

     {mostrarTarjetas()}
    
     </div>
     <div className='containerAmount'>
    <CantidadTarjetas cantidad={cantidad} more={more} less={less}></CantidadTarjetas>
     </div>
    </div>
  )
}

export default App
