import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function GeneralInfo(props) {
    const {data} = props
    
    var textColor = 'green'
    
    if ( data.temp > 50 && data.temp < 70) {
        textColor = 'orange'
    }
    else if (data.temp > 70) {
        textColor = 'red'
    }
   
    
    console.log(typeof(textColor))
    
    return ( 
        <div>
            <h1 className=""> General Info component</h1>
            <h2> SystemInfo</h2>

            <div>CPU usage: {data.cpu}</div>
            <div>RAM usage: {data.ram}</div>
            <div>Uptime: {data.uptime}</div>
            <div> Temperature: <span style={{color:textColor}}> {data.temp} &#8451;</span></div> 
            <div>
                <button onClick={handleClick}> Restart device</button>
            </div>    
            <h2> ModemInfo </h2>
         </div>
    )

}
function handleClick(){
    console.log("Button Restart device has been clicked")
}


export default GeneralInfo
