import React from 'react';
import Me from '../img/L25.png';
import Me1 from '../img/L1.jpg';

export default function Message() {
  return (
    <div className='message owner'>
        <div className='messageInfo'>
            <img src={Me} alt=''/>
            <span>just now</span>
        </div>
        <div className='messageContent'>
            <p>Hello</p>
            <img src={Me1} alt=''/>
        </div>
    </div>
  )
}
