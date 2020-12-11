import React from 'react'
import './CardService.css'
import IconCard9 from '../../../Assets/icon/icon-card9.png'
import IconCard1 from '../../../Assets/icon/icon-card1.png'
import IconCard2 from '../../../Assets/icon/icon-card2.png'
import IconCard3 from '../../../Assets/icon/icon-card3.png'
import IconCard4 from '../../../Assets/icon/icon-card4.png'
import IconCard5 from '../../../Assets/icon/icon-card5.png'
import IconCard6 from '../../../Assets/icon/icon-card6.png'
import IconCard7 from '../../../Assets/icon/icon-card7.png'
import IconCard8 from '../../../Assets/icon/icon-card8.png'



const CardService = () => {
    const DataCard=[
        {icon:IconCard1,
        titleCard:'Mobile Command Management'
    },
    {icon:IconCard2,
        titleCard:'Equipment Optimizer'
    },
    {icon:IconCard3,
        titleCard:'Lifecycle Prediction'
    },
    {icon:IconCard4,
        titleCard:'Troubleshooting Guide'
    },
    {icon:IconCard5,
        titleCard:'Energy Optimizer'
    },
    {icon:IconCard6,
        titleCard:'Smart Diagnostics'
    },
    {icon:IconCard7,
        titleCard:'Vital Equipment Scan'
    },
    {icon:IconCard8,
        titleCard:'Smart Alerts'
    },
    {icon:IconCard9,
        titleCard:'Preventative Maintenance'
    },
    ]
    return (
        <div className="Wraper-Card">
            {DataCard.map((data =>(
                <div className="card-icon">
                <img src={data.icon}/>
                <p>{data.titleCard}</p>
            </div>     
            )))}    
        </div>
    )
}

export default CardService
