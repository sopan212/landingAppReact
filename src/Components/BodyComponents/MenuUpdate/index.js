/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './MenuUpdate.css'
import Background from '../../../Assets/images/background.png'
import Img from '../../../Assets/images/imageupdate.png'
import icon5 from '../../../Assets/icon/icon5.png'
import icon6 from '../../../Assets//icon/icon6.png'
import icon7 from '../../../Assets/icon/icon7.png'
import icon8 from '../../../Assets/icon/icon8.png'
import Dotatas from '../../../Assets/images/dot-atas.png'

function MenuUpdate() {
    const objData = [
        {
            icon: icon5,
            title: 'Monitor',
            text: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.'
        },
        {
            icon: icon6,
            title: 'Maintenance',
            text: ' Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.'
        },
        {
            icon: icon7,
            title: 'Repair',
            text: 'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.'
        },
        {
            icon: icon8,
            title: 'Replace',
            text: 'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.'
        },
    ]
    return (
        <div className="wrap">
            <div className="update">
                <p>UPDATE</p>
                <h2>It starts with an upgrade</h2>
                <img src={Img} alt="image" />
            </div>
            <div className="menu-icon">
                <img src={Background} alt="background" />
                <div className="icon">
                    {objData.map((data => (
                        <div className="card">
                            <img src={data.icon} alt="icon" />
                            <h5>{data.title}</h5>
                            <p> {data.text}</p>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default MenuUpdate
