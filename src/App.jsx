import React from 'react'
import { useState } from 'react'
import RandomColors from './components/RandomColors'
import CantidadTarjetas from './components/CantidadTarjetas'
import CambiarModo from './components/CambiarModo'
function App() {

  const [cantidad, setCantidad] = useState(16)

  const [redo,setRedo] = useState(0)


 
    const less = ()=>{
      if(cantidad>1)
      setCantidad(cantidad-1)
    }
  const more = ()=>{
    if(cantidad<16)
    setCantidad(cantidad+1)
    
  }

  function mostrarTarjetas(){
    let tarjetas = []
  for (let index = 0; index < cantidad; index++) {
    tarjetas.push( <RandomColors></RandomColors>)
  }
      return tarjetas;
  }

  return (
    <div className="App">
<header> 
      <h1>Color randomizer</h1>
<section className="botonesResponsive"> 
     <section className='containerAmount'>
    <CantidadTarjetas cantidad={cantidad} more={more} less={less}></CantidadTarjetas>
     </section>
    <section class="seccionCambiar"> 
     <CambiarModo redo = {redo} setRedo={setRedo}></CambiarModo>
     </section>
</section>
  </header>

     <main className='container'>

     {mostrarTarjetas()}
   
     </main>

     <footer className="botones">
      
      <section className='containerAmount'>
    <CantidadTarjetas cantidad={cantidad} more={more} less={less}></CantidadTarjetas>
     </section>
    <section class="seccionCambiar"> 
     <CambiarModo redo = {redo} setRedo={setRedo}></CambiarModo>
     </section>
     </footer>

    </div>

  )
}

export default App
