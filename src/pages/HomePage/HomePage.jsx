import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperType } from './style'

export default function HomePage() {
  const arr = ['TV', 'tu lanh']
  return (
    <div style={{padding: '0px 120px'}}>
      <WrapperType>
        {arr.map((item)=>{
          return(
            <TypeProduct name={item} key={item}/>
          )
        })}
      </WrapperType>
      HomePage
    </div>
  )
}
