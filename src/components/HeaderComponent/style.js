import styled from 'styled-components'
import {Row} from 'antd'

export const WrapperHeader = styled(Row)({
    padding: '10px 120px',
    background: 'rgb(26, 148, 255)',
    alignItems: 'center',
})

export const WrapperContextHeader = styled.span({
    fontSize: '18px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left'
})

export const WrapperHeaderAccount = styled.div({
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    gap: '10px',
})

export const WrapperContextAccount = styled.span({
    color: '#fff',
    fontSize: '12px'
})