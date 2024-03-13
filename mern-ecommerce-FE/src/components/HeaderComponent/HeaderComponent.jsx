import React from 'react'
import {Col, Badge} from 'antd'
import { WrapperContextAccount, WrapperContextHeader, WrapperHeader, WrapperHeaderAccount } from './style'
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

export default function HeaderComponent() {
  return (
    <div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(26, 148, 255)', justifyContent: 'center',}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperContextHeader>MERN E-COMMERCE</WrapperContextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch 
            size="large"
            bordered={false}
            textButton="Seach"
            placeholder="input search text" />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize: '30px'}}/>
            <WrapperContextAccount>
              <span>Sign In/ Sign Up</span>
              <div>
                <WrapperContextAccount>Account</WrapperContextAccount>
                <CaretDownOutlined />
              </div>
            </WrapperContextAccount>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
            </Badge>
            <WrapperContextAccount>Your Cart</WrapperContextAccount>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

