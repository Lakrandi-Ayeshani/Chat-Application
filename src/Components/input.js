import React from 'react'
import Attach from '../img/Attach2.png'
import File from '../img/file.png'

const input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type a something'/>
      <div className='send'>
        <img src={Attach} alt=''/>
        <input type='file' style={{display: 'none'}} id='file'/>
        <label htmlFor='file'>
          <img src={File} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input
