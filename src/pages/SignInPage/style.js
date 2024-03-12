import styled from 'styled-components'

export const WrapperContainerLeft = styled.div({
    padding: '40px 45px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',

})

export const WrapperContainerRight = styled.div({
    width: '300px',
    background: 'linear-gradient(136deg, rgb(240, 248, 255) -1% , rgb(219, 238, 255) 85%)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
})

export const WrapperTextLight = styled.span({
    color: 'rgb(13, 92, 182)',
    fontSize: '13px',
    cursor: 'pointer'
})