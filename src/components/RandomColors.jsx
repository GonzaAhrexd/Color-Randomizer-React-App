import React from 'react'
import styled from 'styled-components'
import convert from 'hsl-to-hex'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Toaster, toast } from 'react-hot-toast'
function RandomColors() {
  

    function random(max){
        return Math.floor(Math.random()*max)
    }
    
   let values = [random(255),random(100),random(100)]
   let hsl = `hsl(${values[0]},${values[1]}%,${values[2]}%)`
   
   let hex = convert(values[0],values[1],values[2])

  const Cards = styled.div`
  border-color: white;
  border-style: solid;
  width: 10vw;
  height: 10vw;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${hsl};
  color: transparent;
  &:hover{
    cursor: pointer;
    width: 11vw;
    height: 11vw;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    weight: 700;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
  }
  `
    return (
    <>
    <div> 
    <CopyToClipboard text={hex}>
    <Cards  onClick={() => toast('✅ Copied to clipboard')}>

     <b>  Click to copy HEX </b>

    </Cards>

    
   </CopyToClipboard>

      <Toaster/>

    <div className='information'> 

    <div className='info'>{hex}
    </div>
    <div className='info'>
    {hsl}
    </div>
    </div>
    <div>
     
    </div>
    </div>

 
  

</>
    
  )
}

export default RandomColors