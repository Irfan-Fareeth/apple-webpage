import React from 'react'
import './mainpic.css'
const mainpic = () => {
  return (
    
      <section className='mainpic'>
        <div className='mainpic-content'>
        <div className="image-wrapper">
        
        <video autoPlay muted loop className="video-background">
            <source src="../WhatsApp Video 2024-08-23 at 00.49.12_e6cf1d80.mp4" type="video/mp4"/>
        </video>
        <div className='content'>
                <h1>"Think Different, Live Apple"</h1>
                <p>Apple products are designed for Life, And Everybody</p>
                <div className=''>
                  <button className='clickbutton'>Visit</button>
                </div>
        </div>
          
		    </div>
        </div>
      </section>
    
  )
}

export default mainpic
