import React from 'react'
import './Testi.css'
import Iconimage from '../../../Assets/images/iconimage1.png'
import Iconimage1 from '../../../Assets/images/iconimage2.png'
import BtnRight from '../../../Assets/icon/Subtract.png'
import BtnLeft from '../../../Assets/icon/Subtract2.png'
import IcnKutip from '../../../Assets/icon/icontag1.png'
const TestiMonial = () => {
    const DataCard = [
        {
            icon: Iconimage1,
            testi: '“We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm.”',
            name: 'Ryan Oliver',
            job: 'Design Manager Kiluna'
        },
        {
            icon: Iconimage,
            testi: '“Thank you for introducing me to Siphome! We like how the system gives updates to us and the homeowner as well to give us a real time update on how everything is working.”',
            name: 'Gladina Samantha',
            job: 'CEO JobDesk United, LLC'
        },

    ]
    return (
        <div className="Testi">
            <p className="testi-title">Testimonials</p>
            <h3>Let’s see what people say about Siphome </h3>
            <div className="Wraper-card">
                {DataCard.map((data => (
                    <div className="card-testi">
                        <img src={data.icon} />
                        <p className="title-card">{data.testi}</p>
                        <p className="name-card">{data.name}</p>
                        <p className="job-card">{data.job}</p>
                        <img src={IcnKutip} />
                    </div>
                )))}

            </div>
            <div className="btn-slide">
                <img className="btnleft" src={BtnLeft} />
                <img className="btnright" src={BtnRight} />
            </div>
        </div>
    )
}

export default TestiMonial