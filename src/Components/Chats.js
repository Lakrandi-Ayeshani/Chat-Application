import React from 'react';
import Me from '../img/L25.png'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={Me} alt=""/>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello bole</p>
        </div>
       </div>
       <div className='userChat'>
        <img src={Me} alt=""/>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello bole</p>
        </div>
       </div>
       <div className='userChat'>
        <img src={Me} alt=""/>
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello bole</p>
        </div>
       </div>
    </div>
  )
}

export default Chats
