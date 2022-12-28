import React from 'react'
import styled from 'styled-components'
function RandomColors() {
  

    function random(max){
        return Math.floor(Math.random()*max)
    }
    
    

   let hsl = `hsl(${random(255)},${random(100)}%,${random(100)}%)`



  const Cards = styled.div`
  border-color: white;
  border-style: solid;
  width: 10vw;
  height: 10vw;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${hsl};
  color: white;

  `
    return (
    <>
    <div> 
    <Cards>



    </Cards>
    <div className='info'>
    {hsl}
    </div>
    </div>



</>
    
  )
}

export default RandomColors