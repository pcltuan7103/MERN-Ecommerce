import styled from 'styled-components'

export const WrapperLableText = styled.h4({
    color: 'rgb(56, 56, 61)',
    fontSize: '14px',
    fontWeight: '500'
})

export const WrapperTextValue = styled.span({
    color: 'rgb(56, 56, 61)',
    fontSize: '12px',
    fontWeight: '400'
})

export const WrapperContent = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '12px'
})

export const WrapperTextPrice = styled.div({
    borderRadius: '10px', 
    backgroundColor: 'rgb(238, 238, 238)', 
    color: 'rgb(56, 56, 61)', 
    width: 'fit-content', 
    padding: '4px'
})