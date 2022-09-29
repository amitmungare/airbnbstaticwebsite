import React from 'react'
import { CardView } from './CardView'
import './mainpage.css'

export const Mainpage =()=>{
    return(
        <div className="main-div">

            <div className="image-div">
                <img className='grid-image' src={require('../images/Group77.png')} alt="grid"/>
            </div>

            <div className='text-div'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind 
                    hosts—all without leaving home.
                </p>
            </div>
            

            <div className='card-view-div'>
                <CardView
                    img={require("../images/wedding-photography1.png")}
                    rating="4.0"
                    details="nice style"
                    price="343"
                />
                <CardView
                    img={require("../images/mountain-bike1.png")}
                    rating="6.0"
                    details="better data"
                    price="342"
                />
                <CardView
                    img={require("../images/amit.JPG")}
                    rating="9.0"
                    details="india champ"
                    price="824"
                />
                <CardView
                    img={require("../images/image12.png")}
                    rating="7.0"
                    details="great work"
                    price="674"
                />
            </div>
        </div>
    )
}