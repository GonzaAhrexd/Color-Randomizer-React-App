import React from 'react'

function CambiarModo(props) {
    

    
  const regenerate = ()=>{

    props.setRedo(!props.redo)
    
  }

  return (
    <> 
     <div className='cambioModo'>
        <a onClick={regenerate}><img className="regenerate" src="./autorenew_FILL0_wght400_GRAD0_opsz48.svg" /> </a>
   </div>
      </>
  )
  
}

export default CambiarModo