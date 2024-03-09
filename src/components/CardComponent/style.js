import styled from 'styled-components'
import {Card} from 'antd'

export const WrapperCardStyle = styled(Card)({
    width: '200px',
    '& img': {
        height: '200PX',
        width: '200px'
    },
    position: 'relative'
})

export const StyleNameProduct = styled.div({
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    color: 'rgb(56, 56, 61)'
})

export const WrapperReportText = styled.div({
    fontSize: '11px',
    color: 'rgb(128, 128, 137)',
    display: 'flex',
    alignItems: 'center',
    margin: '6px 0px 0px'
})

export const WrapperPriceText = styled.div({
    color: 'rgb(255, 66, 78)',
    fontSize: '16px',
    fontWeight: '500',
})

export const WrapperDiscountText = styled.span({
    color: 'rgb(255, 66, 78)',
    fontSize: '12px',
    fontWeight: '500'
})