import React from 'react';
import './Card.css';

const Card = (props) => {
    // console.log(props)
    const { img, name, job, age, home, subscription } = props.member;
    return (
        <div className='card-body'>
            <div>
                <img src={img} alt="" />
                <h4>Name :<span className='font-weight'> {name}</span></h4>
                <h4>Job : <span className='font-weight'>{job}</span></h4>
                <h4>Age : <span className='font-weight'>{age}</span></h4>
                <h4>District : <span className='font-weight'>{home}</span></h4>
                <h4>Subcription fee : <span className='font-weight'>{subscription}</span></h4>
                <button
                    onClick={() => props.handleAddMember(props.member)}
                    className='btn'>Add</button>
            </div>
        </div>
    );
};

export default Card;