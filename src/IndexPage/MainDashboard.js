import React from 'react';
import './Styles/MainDashboard.css';
import SmallCard from '../Card/SmallCard';

export default function MainDashboard() {
    return (
        <div className='MainDashBody'>
            <div className='MainDashBodyDiv'>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <div className='MainDashBodyDiv'>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    )
}
