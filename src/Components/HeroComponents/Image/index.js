import React from 'react'
import HeroImg from '../../../Assets/images/hero-image.png'
import './Image.css'

function ImageHero() {
    return (
        <div className="hero">
             <img src={HeroImg} alt="hero-imgae"/> 
        </div>
    )
}

export default ImageHero
