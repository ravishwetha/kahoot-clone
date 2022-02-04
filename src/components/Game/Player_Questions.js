import React from 'react';
import './Game.css';
import triangle from '../../Assests/triangle.svg'
import diamond from '../../Assests/diamond.svg'
import square from '../../Assests/square.svg'
import circle from '../../Assests/circle.svg'

export default function PlayerQuestion(props){
    return (
        <div className='answer-container'>
            <div className='q1' onClick={() => props.submitAnswer(1)}>
                <p>{props.q1}</p>
                <img src={triangle} alt='' className='shape' />
            </div> 
            <div className='q2' onClick={() => props.submitAnswer(2)}>
                <p>{props.q2}</p>
                <img src={diamond} alt=''className=' shape'/>
            </div> 
            <div className='q3' onClick={() => props.submitAnswer(3)}>
                <p>{props.q3}</p>
                <img src={square} alt=''className='shape'/>
            </div> 
            <div className='q4' onClick={() => props.submitAnswer(4)}>
                <p>{props.q4}</p>
                <img src={circle} alt=''className='shape'/>
            </div> 
        </div> 
    )
}