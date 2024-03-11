import {Image, Col, InputNumber} from 'antd'
import styled from 'styled-components'

export const WrapperStyleSmallImage = styled(Image)({
    width: '64px',
    height: '64px'
})
export const WrapperStyleColImage = styled(Col)({
    display: 'flex',
    flexBasis: 'unset'
})

export const WrapperStyleNameProduct = styled.h1({
    color: '36, 36, 36',
    fontSize: '24px',
    fontWeight: '300',
    lineHeight: '32px',
    wordBreak: 'break-word'
})

export const WrapperStyleTextSold = styled.span({
    fontSize: '15px',
    lineHeight: '24px',
    color: 'rgb(120, 120, 120)'
})

export const WrapperPriceProduct = styled.div({
    background: 'rgb(250, 250, 250)',
    borderRadius: '4px'
})

export const WrapperPriceTextProduct = styled.h1({
    fontSize: '32px',
    lineHeight: '40px',
    marginRight: '8px',
    fontWeight: '500',
    padding: '10px',
    marginTop: '10px'
})

export const WrapperAddressProduct = styled.h1({
    'span.address':{
        textDecoration: 'underline',
        fontSize: '15px',
        lineHeight: '24px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    'columnSpan.change-address':{
        color: 'rgb(11, 116, 229)',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '500',
    }
})

export const WrapperQualitProduct = styled.div({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    borderRadius: '4px',
    width: '120px',
    border: '1px solid #ccc',
})

export const WrapperInputNumber = styled(InputNumber)({
    '&.ant-input-Number.ant-input-nmber-small':{
        width: '40px',
        borderTop: 'none',
        borderBottom: 'none',
        '&.ant-input-number-handler-wrap':{
            display: 'none'
        }
    },
})