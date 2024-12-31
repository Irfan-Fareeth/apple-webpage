import React from 'react';
import './secondmain.css';
import SlideBlocks from './carousel/carousel';

const SecondMain = () => {
  return (
    <section className='secondmain'>
       <div className='main'>
       <div className='cop'>
          <SlideBlocks source1="../79dda01c-3271-4a2b-af65-eaa2d8f2dc54.jpeg"
                       source2="../applepic.jpg"
                       source3="../Apple accessories.jpeg"
                       interval="3000"
                      />

       </div>
       <div className='cop'>
          <SlideBlocks source1="../How Apple Vision Pro is Revolutionizing the Digital Experience_.jpeg"
                       source2="../iphone-15-pro-blue-256gb-12.webp"
                       source3="../stad.jpg"
                       interval="2000"/>
       </div>
       </div>
    </section>
  );
};

export default SecondMain;
