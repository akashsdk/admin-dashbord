import React from 'react';
import './Styles/MainDashboard.css';
import '../Card/Styles/SmallCard.css';
import SmallCard from '../Card/SmallCard';
import { BarChartOutlined } from '@ant-design/icons';
import { FaDollarSign } from "react-icons/fa";

export default function MainDashboard() {
    return (
        <div className='MainDashBody'>
            <div className='MainDashBodyDiv'>
                <SmallCard Icon={<BarChartOutlined className='SmallCardLeftIcon' />}
                    text='Earnings' amount='$350.4' />
                <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                    text='Spend this month' amount='$1,500' />
                <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                    text='Sales' amount='$580.56' />
            </div>
            <div className='MainDashBodyDiv'>
                <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                    text='Your balance' amount='$1200.56' />
                <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                    text='New Tasks' amount='567' />
                <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                    text='Total Projects' amount='56' />
            </div>
        </div>
    )
}
