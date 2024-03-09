import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperType } from './style'
import SlideComponent from '../../components/SlideComponent/SlideComponent'
import slide1 from '../../assets/images/slide-1.webp'
import slide2 from '../../assets/images/slide-2.webp'
import slide3 from '../../assets/images/slide-3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

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
        <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', gap: '20px'}}>
          <CardComponent />
        </div>
        <NavbarComponent/>
      </div>
    </div>
  )
}
