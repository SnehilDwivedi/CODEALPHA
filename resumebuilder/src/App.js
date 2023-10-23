import React from 'react'
import "./App.css"
import Resume from './Resume'
import logo from "./image/bg-image.jpg"

import Btn from './Btn';


function App() {
    return (
        <div>



           




            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col">
                        <img style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;" }}
                            src={logo} height="400px" width="400px" class="img-fluid" alt="" />
                    </div>
                    <div class="col">
                        <h1 class="text-white "><b>Resume Builder</b></h1>
                    </div>
                </div>
            </div>
            <Resume />
 <Btn/>
    



        </div>
    )
}

export default App
