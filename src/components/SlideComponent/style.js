import styled from 'styled-components'
import Slider from 'react-slick/lib/slider';

export const WrapperSlideStyle = styled(Slider)({
    '& .slick-arrow.slick-prev': {
        left: '12px',
        top: '50%',
        zIndex: '10',
        '&::before':{
            fontSize: '40px',
            color: '#fff',
        }
    },
    '& .slick-arrow.slick-next': {
        left: '28px',
        top: '50%',
        zIndex: '10',
        '&::before':{
            fontSize: '40px',
            color: '#fff',
        }
    },
    '& .slick-dots':{
        zIndex: '10',
        bottom: '-2px !important',
        'li':{
            'button':{
                '&::before':{
                    color: 'rgb(255, 255, 0.5)'
                }
            }
        },
        'li.active':{
            'button':{
                '&::before':{
                    color: '#fff'
                }
            }
        }
    }
})