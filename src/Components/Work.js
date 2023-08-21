import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { AltRoute } from '@mui/icons-material';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"


        },
        {
            image: ChooseMeals,
            title: "Choose how Often",
            text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"


        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"


        },
    ];


  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        <p className='primary-subheading'> Work</p>
        <h1 className='primary-heading'> How It Works</h1>
        <p className='primary-text'>
            Work quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
         </p>

    </div>

    <div className='work-section-bottom'>
        {
            workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" /> 
                    </div>
                    <h1>{data.title} </h1>
                    <p>{data.text}</p>

                </div>
            ))}
        </div>
    </div>
  );
} ;

export default Work