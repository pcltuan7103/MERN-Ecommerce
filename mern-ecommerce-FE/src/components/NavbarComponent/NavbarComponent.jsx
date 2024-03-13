import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'
import { Rate } from 'antd';

const NavbarComponent = () => {
    const renderContent = (type, options) => {
        switch(type){
            case 'text':
                return options.map((option) => {
                    return(
                        <WrapperTextValue>
                            {option}
                        </WrapperTextValue>
                    )
                })
            case 'star':
                return options.map((option) => {
                    return(
                        <div>
                            <Rate 
                            style={{fontSize: '12px', }}
                            disabled defaultValue={option} />
                            <span> From {option} Star</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return(
                        <WrapperTextPrice>
                            {option}
                        </WrapperTextPrice>
                    )
                })
            default:
                return{}
        }
    }

  return (
    <div style={{backgroundColor: '#fff'}}>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent('text', ['Laptop', 'Iphone'])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('star', [3, 4, 5])}
      </WrapperContent>
      <WrapperContent>
        {renderContent('price', ["Under 4.000.000", "From 5.000.000 to 10.000.000", "From 10.000.000 to 20.000.000"])}
      </WrapperContent>
    </div>
  )
}

export default NavbarComponent
