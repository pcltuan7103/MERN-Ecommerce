import React from 'react'
import {Image} from 'antd'
import { WrapperSlideStyle } from './style';

const SlideComponent = ({arrImage}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <WrapperSlideStyle {...settings}>
      {arrImage.map((image) => {
        return(
          <Image src={image} alt='slide' preview={false} width="100%" height="300px"/>
        )
      })}
    </WrapperSlideStyle>
  )
}

export default SlideComponent
