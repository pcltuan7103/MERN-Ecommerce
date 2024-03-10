import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonViewMore, WrapperProduct, WrapperType } from './style'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import slide1 from '../../assets/images/slide-1.webp'
import slide2 from '../../assets/images/slide-2.webp'
import slide3 from '../../assets/images/slide-3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'

export default function HomePage() {
  const arr = ['TV', 'tu lanh']
  return (
    <div>
      <div style={{padding: '0px 120px'}}>
        <WrapperType>
          {arr.map((item)=>{
            return(
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperType>
      </div>
      <div id='container' style={{backgroundColor: '#efefef', padding: '0 120px', height: '1000px'}}>
        <SlideComponent arrImage={[slide1, slide2, slide3]}/>
        <WrapperProduct>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProduct>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '10px'}}>
          <WrapperButtonViewMore textButton='View More' type='outline' styleButton={{
            border: '1px solid rgb(11, 116, 229)',
            color: 'rgb(11, 116, 229)',
            width: '240px',
            height: '38px',
            borderRadius: '4px'
          }}
          styleTextButton={{
            fontWeght: '500'
          }}/>
        </div>
      </div>
    </div>
  )
}
