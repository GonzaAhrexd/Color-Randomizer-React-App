import React from 'react'
import styled from 'styled-components'
import convert from 'hsl-to-hex'
import { CopyToClipboard } from 'react-copy-to-clipboard'


function random(max){
  return Math.floor(Math.random()*max)
}



function RandomColors(props) {
  

   
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
display: flex;
justify-content: center;
align-items: center;
align-content: center;
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
             @media (max-width: 638px) {
              width: 95vw;
              height: 26vw;
              border-color: transparent;
              border-radius: 5px;
              margin-bottom: 2vw;
              margin-right: 3vw;
          }

            }
            @media (max-width: 638px) {
              width: 95vw;
              height: 25vw;
              border-color: transparent;
              border-radius: 5px;
              margin-bottom: 2vw;
              margin-right: 3vw;
          }
`


    return (
      
<>



    <div className='ColorCards'> 
    <CopyToClipboard text={hex}>
    <Cards  onClick={() => {props.notify()}}>

     <b>  Click to copy HEX </b>

    </Cards>

    
   </CopyToClipboard>

    
    

    <div className='information'> 

    <div className='info'>{hex} </div>

    <div className='info'>{hsl} </div>

    </div>
   

    </div>
    

 
  

</>
    
  )
}

export default RandomColors