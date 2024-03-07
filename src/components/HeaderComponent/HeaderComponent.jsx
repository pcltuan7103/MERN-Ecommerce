import React from 'react'
import {Col} from 'antd'
import { WrapperContextAccount, WrapperContextHeader, WrapperHeader, WrapperHeaderAccount } from './style'
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

export default function HeaderComponent() {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperContextHeader>MERN E-COMMERCE</WrapperContextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch 
            size="large"
            placeholder="input search text" 
            textButton="Seach"
            bordered={false} />
        </Col>
        <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
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
            <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
            <WrapperContextAccount>Your Cart</WrapperContextAccount>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

