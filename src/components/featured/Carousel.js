import React from 'react'
import Slider from 'react-slick'

import SlideOne from '../../resources/images/slide_one.jpg'
import SlideTwo from '../../resources/images/slide_two.jpg'
import SlideThree from '../../resources/images/slide_three.jpg'

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (
    <div 
      className="carrousel_wrapper"
      style={{
        background:'red',
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}
    >
      <Slider 
        {...settings}
      >
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${SlideOne})`,
              height: `${window.innerHeight}px`,
            }}
          >
          </div>
        </div>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${SlideTwo})`,
              height: `${window.innerHeight}px`,
            }}
          >
          </div>
        </div>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${SlideThree})`,
              height: `${window.innerHeight}px`,
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel