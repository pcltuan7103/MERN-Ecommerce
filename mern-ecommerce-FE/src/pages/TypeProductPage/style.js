import styled from 'styled-components'
import {Col} from 'antd'

export const WrapperProduct = styled.div({
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '20px'
})

export const WrapperNavbar = styled(Col)({
    backgroundColor: '#fff', 
    paddingRight: '10px', 
    padding: '10px', 
    borderRadius: '4px',
    height: 'fit-content',
    marginTop: '20px',
    width: '200px'
})