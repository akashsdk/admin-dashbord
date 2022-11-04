import React from 'react';
import './Styles/MainDashboard.css';
import SmallCard from '../Card/SmallCard';
import { BarChartOutlined} from '@ant-design/icons';
import { FaDollarSign } from "react-icons/fa";

export default function MainDashboard() {
    return (
        <div className='MainDashBody'>
            <div className='MainDashBodyDiv'>
                <SmallCard text='Earnings' amount='350.4'/>
                <SmallCard text='Spend this month' amount='1,500'/>
                <SmallCard text='Sales' amount='580.56'/>
            </div>
            <div className='MainDashBodyDiv'>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
            <FaDollarSign />
        </div>
    )
}
