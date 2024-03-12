import styled from 'styled-components'
import { Input } from "antd";


export const WrapperInputStyle = styled(Input)({
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    backgroundColor: 'rgb(232, 240, 254)',
    outline: 'none'
})

export const WrapperInputPassStyle = styled(Input.Password)({
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    backgroundColor: 'rgb(232, 240, 254)',
    outline: 'none'
})