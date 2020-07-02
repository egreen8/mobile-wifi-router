import GeneralInfo from './GeneralInfo.js'
import SystemInfo from './SystemInfo.js'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import dd from '../dummy_data'

function App() {
    return (
        <div>
            <div className='jumbotron'>
            <h1 className = 'display-3'>TAP device</h1>
            </div>
            <SystemInfo data={dd}/>
        </div>
    )
}

export default App