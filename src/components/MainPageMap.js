import React from 'react'
import { CardView } from './CardView'
import './mainpage.css'
import Data from '../data'

export const Mainpagemap =()=>{

    const card = Data.map(data =>{
        return <CardView
                    key={data.id}
                    // data={data}

                    {...data}

                    // img={data.coverImg}
                    // location={data.location}
                    // rating={data.stats.rating}
                    // details={data.title}
                    // price={data.price}
                    // openSpots={data.openSpots}

                />
    })

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
               {card}
            </div>
        </div>
    )
}