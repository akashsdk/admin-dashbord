import React from 'react';
import './Styles/Profile.css';
import ProfileCard from '../Card/ProfileCard/ProfileCard';

export default function Profile() {
    return (
        <div className='ProfileSecBody'>
            <div style={{ margin:'20px',}}>
                <ProfileCard />
            </div>
            <div style={{ margin:'20px',}}>
                <ProfileCard />
            </div>
        </div>
    )
}
