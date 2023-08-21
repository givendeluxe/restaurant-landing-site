import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        <p className='primary-subheading'> Testimonials</p>
        <h1 className='primary-heading'> What Are They Saying</h1>
        <p className='primary-text'>
            Work quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        </div>

        <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p >
            Work quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            </div>
            <h1>John Doe</h1>

        </div>

    </div>
  )
}

export default Testimonials