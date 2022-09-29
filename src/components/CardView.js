import './cardView.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

export const CardView = (props) =>{

    let badgeText
    if(props.openSpots===0){
        badgeText = "Sold Out"
    }else if(props.location ==="Online"){
        badgeText = "Online"
    }

    return(
        <div className="main-card-div">

            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className='sports-img' src={props.coverImg} alt="sports"/>

            <div className='data-div'>
                <div className='rating-div'>
                    <FontAwesomeIcon className='star-rating' icon={faStar} />
                    <span> {props.stats.rating} .{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p> <span>From ${props.price} </span>/ person</p>
                
            </div>

        </div>
    )
}