import React from 'react'
import './MenuIcon.css'
import Icon1 from '../../../Assets/icon/icon_1.png'
import Icon2 from '../../../Assets/icon/icon_2.png'
import Icon3 from '../../../Assets/icon/icon_3.png'
import Icon4 from '../../../Assets/icon/icon_4.png'
import Dotatas from '../../../Assets/images/dot-atas.png'


const MenuIcon = () => {
    const Data = [
        {
            Icon: Icon1,
            title: 'Automatic Threat Detection',
            paragrap: 'Siphome reacts the moment your equipment fails, alerting you to the problem'
        },
        {
            Icon: Icon2,
            title: 'Smart Diagnostics',
            paragrap: ' See exactly what is malfunctioning and compare your maintenance options on the same screen.'
        },
        {
            Icon: Icon3,
            title: 'Disaster Prevention',
            paragrap: 'Predictive analytics lets you see what needs maintenance before it fails'
        },
        {
            Icon: Icon4,
            title: '24/7 Service',
            paragrap: 'Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.'
        }
    ]

    return (
        <div className="Wraper">
            {Data.map((data,index) => (
                <div className="Card">
                    <img key={index} src={data.Icon} alt="icon" />
                    <h5>{data.title}</h5>
                    <p>{data.paragrap}</p>
                </div>
            ))}

        </div>
    )
}

export default MenuIcon
