import React from 'react';
import '../Styles/ProfileCard.css';
import img from '../../icon/ProfileImage.png';

export default function ProfileCard() {
    return (
        <div className='ProfileCardBody'>
            <div className='ProfileCardBodyDiv'>
                <div className='ProfileCardTopDiv'>
                    coverPhoto
                </div>
                <div>
                    <div className='ProfileCardImgDiv'>
                        <img src={img} className='ProfileCardImg' />
                    </div>
                    <p className='ProfileCardName'>Shahriar Akash</p>
                    <p className='ProfileCardName1'>Graphics Design</p>
                </div>
            </div>

        </div>
    )
}
