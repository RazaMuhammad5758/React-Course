import React from 'react'
import { useState } from 'react'
import './UiGradient.css'



const UiGradient = () => {
    const [bg, setBg] = useState('black')
    const [bg2, setBg2] = useState('black')
    const [bg3, setBg3] = useState('black')
    const [color, setColor] = useState("black")
    const [color2, setColor2] = useState("black")
    const [color3, setColor3] = useState("black")
    

   

    const bgChanger =()=>{
        const hex = "0123456789ABCDEF"
         let color = "#"
        for (let i = 0; i < 6; i++) {
            color+= hex[Math.floor(Math.random()*hex.length)]

        }
        setBg(color)
        setColor(color)
        // console.log(color);
    }
    const bgChanger2 =()=>{
        const hex = "0123456789ABCDEF"
         let color2 = "#"
        for (let i = 0; i < 6; i++) {
            color2+= hex[Math.floor(Math.random()*hex.length)]

        }
        setBg2(color2)
        setColor2(color2)
    }
    const bgChanger3 =()=>{
        const hex = "0123456789ABCDEF"
        let  color3 = "#"
        for (let i = 0; i < 6; i++) {
            color3+= hex[Math.floor(Math.random()*hex.length)]

        }
        setBg3(color3)
        setColor3(color3)
    }
    const ui =()=>{
        bgChanger()
        bgChanger2()
        bgChanger3()
    }
  return (
<div>
    <div style={{
        background: `linear-gradient(to right, ${bg},  ${bg2}, ${bg3})`,
        width:"100%",
        height:"100vh"
      }}>
        <div className="container">
            <div className="upper">
                <div className="left">
                    <div id="leftClr" style={{backgroundColor:bg}} ></div>
                    <div id="leftCode"  >{color}</div> 
                
                </div>
                <div className="mid" >
                    <div id="midClr" style={{backgroundColor:bg2}} ></div>
                    <div id="midCode"  >{color2}</div>
                
                </div>
                <div className="right">
                    <div id="rightClr" style={{backgroundColor:bg3}} ></div>
                    <div id="rightCode" >{color3}</div>
               
                </div>
            
            </div>
            <h4 style={{color:'white'}}>CSS: background: linear-gradient(to right, {color}, {color2}, {color3});</h4>
            <div className='btns'>

            <button className='pre' onClick={ui}>&#8920;</button>
            <button className='next' onClick={ui}>&#8921;</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default UiGradient
