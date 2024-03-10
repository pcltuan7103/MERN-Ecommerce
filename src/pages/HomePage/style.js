import styled from 'styled-components'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

export const WrapperType = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    justifyContent: 'flex-start',
    borderBottom: '1px solid #ddd',
    height: '45px'
})

export const WrapperButtonViewMore = styled(ButtonComponent)({
   ' &:hover':{
        color: '#fff',
        backgroundColor: 'rgb(13, 92, 182)',
        '& span':{
            color: '#fff'
        }
    }
})

export const WrapperProduct = styled.div({
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '20px'
})