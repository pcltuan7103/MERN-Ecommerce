import styled from 'styled-components'
import { Input } from "antd";


export const WrapperInputStyle = styled(Input)({
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    outline: 'none',
    '&:focus':{
        backgroundColor: 'rgb(232, 240, 254)',
    }
})

export const WrapperInputPassStyle = styled(Input.Password)({
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    outline: 'none',
    '&:focus':{
        backgroundColor: 'rgb(232, 240, 254)',
    }
})