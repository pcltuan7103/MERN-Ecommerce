import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSold } from './style';
import {StarFilled} from '@ant-design/icons'

const CardComponent = () => {
  return (  
    <WrapperCardStyle
        hoverable
        headStyle={{height: '200px', width: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{padding: '10px'}}
        cover={<img alt="example" src="https://cdn.tgdd.vn/Products/Images/44/304867/TimerThumb/asus-tuf-gaming-f15-fx506hf-i5-hn014w.jpg" />}
        >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>4.9</span> <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            </span>
            <WrapperStyleTextSold> | 1000+ Sold</WrapperStyleTextSold>
        </WrapperReportText>
        <WrapperPriceText>
            1.000.000 
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
