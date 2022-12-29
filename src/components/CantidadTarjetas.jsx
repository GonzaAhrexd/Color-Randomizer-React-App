import React from 'react'

function CantidadTarjetas(props) {
  return (


   <>
    <div onClick={props.less} className='cantidad'>
      <a > <img src="./arrow_downward_FILL0_wght400_GRAD0_opsz48.svg" alt="" /> </a>
    </div>
   <div className='cantidad'>
    {props.cantidad}
    </div>
    <div className='cantidad'  onClick={props.more}>
 

    <a> <img src="./arrow_upward_FILL0_wght400_GRAD0_opsz48.svg" alt="" /> </a>
    </div>
    
        </>
  )
}

export default CantidadTarjetas