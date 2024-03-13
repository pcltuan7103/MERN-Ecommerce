import React from 'react'
import {Col, Row} from 'antd'
import {StarFilled, MinusOutlined, PlusOutlined} from '@ant-design/icons'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualitProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleSmallImage, WrapperStyleTextSold } from './style'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
  return (
    <Row style={{padding: '16px', background: '#fff', borderRadius: '4px'}}>
      <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight: '8px'}}>
        <div>
            Large Image
        </div>
        <Row style={{paddingTop: '10px', justifyContent: 'space-between'}}>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
                <WrapperStyleSmallImage src='' alt='Small Image' preview={false}/>
            </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft: '10px'}}>
        <WrapperStyleNameProduct>
            Name Product
        </WrapperStyleNameProduct>
        <div>
            <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            <StarFilled style={{fontSize: '12px', color: 'rgb(253, 216, 54)'}}/>
            <WrapperStyleTextSold> | 1000+ Sold</WrapperStyleTextSold>
        </div>
        <WrapperPriceProduct>
            <WrapperPriceTextProduct>
                200.000 VND
            </WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
            <span>Delivery to </span>
            <span className='address'>354 Tran Tu Binh Street, Hoa Chau, Hoa Vang, Da Nang City</span> - <span className='change-address'>Change address</span>
        </WrapperAddressProduct>
        <div style={{margin: '10px 0 20px', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5', padding: ' 10px 0'}}>
            <div style={{marginBottom: '10px'}}>Quality:</div>
            <WrapperQualitProduct>
                <button style={{border: 'none', background: 'transparent'}}>
                    <MinusOutlined style={{color: '#000', fontSize: '20px'}}/>
                </button>
                <WrapperInputNumber defaultValue={1} size="small" />
                <button style={{border: 'none', background: 'transparent'}}>
                    <PlusOutlined style={{color: '#000', fontSize: '20px'}}/>
                </button>
            </WrapperQualitProduct>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <ButtonComponent
                size={40}
                styleButton={{backgroundColor: 'rgb(255, 57, 69)', height: '48px', width: '220px', border: 'none', borderRadius: '4px'}} 
                textButton={'Buy Now'}
                styleTextButton={{color: '#fff'}}
            />
            <ButtonComponent
                size={40}
                styleButton={{backgroundColor: '#fff', height: '48px', width: '220px', border: '1px solid rgb(13, 92, 182)', borderRadius: '4px'}} 
                textButton={'Buy And Pay Later'}
                styleTextButton={{color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700'}}
            />
        </div>
      </Col>
    </Row>
  )
}

export default ProductDetailComponent
