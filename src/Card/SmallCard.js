import React from 'react';
import './Styles/SmallCard.css';
import { BarChartOutlined} from '@ant-design/icons';

export default function SmallCard(props) {
    return (
        <div className='SmallCardBody'>
            <div className='SmallCardLeft'>
                <BarChartOutlined className='SmallCardLeftIcon'/>
            </div>
            <div className='SmallCardRight'>
                <p className='SmallCardRightP'> {props.text}</p>
                <p className='SmallCardRightP2'>${props.amount}</p>
            </div>
        </div>
    )
}
