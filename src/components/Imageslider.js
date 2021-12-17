import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight as CircleRight, FaArrowAltCircleLeft as CircleLeft} from 'react-icons/fa'

const Imageslider = ({ slides }) => {
    //to use react-icons installed npm i react-icons
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    };

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <CircleLeft className='left-arrow' onClick={prevSlide} />
            <CircleRight className='right-arrow' onClick={nextSlide} /> 
            {SliderData.map((slide, index) => {
                return ( 
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img className='image' src={slide.image} alt='holiday image' />)}
                        
                    </div>
                )
            })}
        </section>
    )
}

export default Imageslider
