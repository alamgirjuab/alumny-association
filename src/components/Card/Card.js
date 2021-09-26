import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Card.css';

const Card = (props) => {
    /* -------------------------
     | Destructuring the array |
     -------------------------*/
    const { img, name, job, age, home, subscription } = props.member;
    /* ----------------------
     | Social Icons declare |
     ----------------------*/
    const btnIcon = <FontAwesomeIcon icon={faArrowRight} />
    const iconFb = <FontAwesomeIcon icon={faFacebookSquare} />
    const iconTw = <FontAwesomeIcon icon={faTwitterSquare} />
    return (
        <div className='card-body'>
            <div>
                <img src={img} alt="" />
                <h4>Name :<span className='font-weight'> {name}</span></h4>
                <h4>Job : <span className='font-weight'>{job}</span></h4>
                <h4>Age : <span className='font-weight'>{age}</span></h4>
                <h4>District : <span className='font-weight'>{home}</span></h4>
                <h4>Subcription fee : <span className='font-weight'>{subscription}</span></h4>

                {/*------------------
                 | Button with icon |
                 ------------------*/}
                <button
                    onClick={() => props.handleAddMember(props.member)}
                    className='btn'>
                    {btnIcon} Add</button>
                {/*----------------------------
                  | Social Icons display area |
                  ---------------------------*/}
                <div className='social-icon'>
                    <span>{iconFb}</span>
                    <span>{iconTw}</span>
                </div>

            </div>
        </div>
    );
};

export default Card;