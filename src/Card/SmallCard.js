import React from 'react';
import './Styles/SmallCard.css';
import { BarChartOutlined} from '@ant-design/icons';

export default function SmallCard() {
    return (
        <div className='SmallCardBody'>
            <div className='SmallCardLeft'>
                <BarChartOutlined className='SmallCardLeftIcon'/>
            </div>
            <div className='SmallCardRight'>
                <p className='SmallCardRightP'>Earnings</p>
                <p className='SmallCardRightP2'>$350.4</p>
            </div>
        </div>
    )
}
