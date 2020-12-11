import React from 'react'
import './MenuService.css'
import HomeImg from '../../../Assets/images/home.png'

function MenuService() {
    return (
        <div className="parrent">
            <h5>SERVICES</h5>
            <h3>Bring more systems into the network</h3>
            <p>Find out just how far Siphome can lead your home into next-gen intelligence.</p>
            <img src={HomeImg} alt="home Image"/>
        </div>
    )
}

export default MenuService
