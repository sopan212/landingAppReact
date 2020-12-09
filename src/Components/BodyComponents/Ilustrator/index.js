import React from 'react'
import IlustratorImg from '../../../Assets/images/ilustrator.png'
import './Ilustrators.css'

const Ilustrator = () => {
    return (
        <div class="wrap-conten">
            <div class="ilustrator">
                <img src={IlustratorImg} alt="ilustrator"/>
            </div>
            <div class="feature">
                <p>FEATURE</p>
                <h2>Meet Siphone</h2>
                <p>The most comprehensive smart solution to home maintenance. All it takes is a simple and affordable sensor installation by one of our Siphome certified technicians. </p>
                
            </div>
        </div>
    )
}

export default Ilustrator
