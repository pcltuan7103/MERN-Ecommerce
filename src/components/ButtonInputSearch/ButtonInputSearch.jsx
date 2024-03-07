import React from 'react'
import {Input, Button} from 'antd'
import {SearchOutlined} from '@ant-design/icons'

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton, bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton = 'rgb(13, 92, 182',
        colorTextButton = '#fff'} = props
    return (
        <div style={{display: 'flex', background: '#fff'}}>
            <Input 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor: backgroundColorInput}}/>
            <Button 
                size={size} 
                bordered={bordered} 
                style={{backgroundColor: backgroundColorButton, border: !bordered && 'none', borderRadius: '0px'}} 
                icon={<SearchOutlined style={{color: colorTextButton}}/>}
                >
                <span style={{color: colorTextButton}}>
                    {textButton}
                </span>
            </Button>
        </div>
    )
}

export default ButtonInputSearch
