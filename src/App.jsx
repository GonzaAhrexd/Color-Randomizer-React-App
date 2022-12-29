import React from 'react'
import { useState } from 'react'
import RandomColors from './components/RandomColors'
import CantidadTarjetas from './components/CantidadTarjetas'
import CambiarModo from './components/CambiarModo'
import { ToastContainer, toast } from 'react-toastify'
import convert from 'hsl-to-hex'
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [cantidad, setCantidad] = useState(1)

  const [redo, setRedo] = useState(0)



  const less = () => {
    if (cantidad > 1)
      setCantidad(cantidad - 1)
  }
  const more = () => {
    if (cantidad < 16)
      setCantidad(cantidad + 1)

  }



  function mostrarTarjetas() {
    let tarjetas = []
    for (let index = 0; index < cantidad; index++) {
      tarjetas.push(<RandomColors notify={notify}></RandomColors>)
    }
    return tarjetas;
  }

  const notify = () => {
    toast.success(' Copied to clipboard!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (
    <div className="App">
      <header>
        <h1>Color randomizer</h1>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />

        <section className="botonesResponsive">
          <section className='containerAmount'>
            <CantidadTarjetas cantidad={cantidad} more={more} less={less}></CantidadTarjetas>
          </section>
          <section class="seccionCambiar">
            <CambiarModo redo={redo} setRedo={setRedo}></CambiarModo>
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
          <CambiarModo redo={redo} setRedo={setRedo}></CambiarModo>
        </section>
      </footer>

    </div>

  )
}

export default App
