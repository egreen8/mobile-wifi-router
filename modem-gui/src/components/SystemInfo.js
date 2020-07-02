import React from 'react'
import getSystemInfo from '../api/api-client'
import 'bootstrap/dist/css/bootstrap.css'

class SystemInfo extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            error:null,
            isLoaded:false,
            
            data:{
                cpu:0,
                ram:0,
                uptime:'',
                temp:0
            }
        }
        this.textColor='black'       
    }

    fetch_data_with_axios(){
       getSystemInfo().then( res=> {
            this.setState({
                isLoaded:true,
                data: res
            });
       } )

    }
       
    componentDidMount(){
        
        this.fetch_data_with_axios()
        this.timerID = setInterval(() => this.on_tick(),
         5000);
    }

    tColor = value => {
        if (value < 50) return 'green'
        else if (value > 50 && value < 70) return 'orange'
        else return 'red'
    }
    formatTime = time => {
        let arr = time.split(':')
        return arr[0]+'h '+ arr[1]+'min ' +arr[2]+'sec'
    }
    
    render(){
               
        return ( 
            <div>
                <h1 className=""> General Info component</h1>
                <h2> SystemInfo</h2>
    
                <div>CPU usage: {this.state.data.cpu} &#37;</div>
                <div>RAM usage: {this.state.data.ram} &#37;</div>
                <div>Uptime: {this.formatTime(this.state.data.uptime)}</div>

                <div> Temperature: <span style={{color:this.tColor(this.state.data.temp)}}> {this.state.data.temp} &#8451;</span></div> 
                <p>
                   <ResetButton/>
                </p>    
                <h2> ModemInfo </h2>
             </div>
        )
    }
    
    on_tick(){
        this.fetch_data_with_axios()        
    }
}

function ResetButton(props){
    return (
        <div>
            <button onClick={handleClick}> Restart device </button>
        </div>
    )
}

function handleClick(){
    console.log("Don't click on me")
}

export default SystemInfo