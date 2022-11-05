import React from 'react';
import './Styles/MainDashboard.css';
import '../Card/Styles/SmallCard.css';
import SmallCard from '../Card/SmallCard';
import { BarChartOutlined } from '@ant-design/icons';
import { FaDollarSign } from "react-icons/fa";
import { AiFillFileText, AiOutlineFileSearch, AiTwotoneCalendar} from "react-icons/ai";

export default function MainDashboard() {
    return (
        <div className='MainDashBody'>
            <div className='MainDashBodyDiv'>
                <div className='MainDashBodyDiv2'>
                    <div style={{ flex: '1', }}>
                        <SmallCard Icon={<BarChartOutlined className='SmallCardLeftIcon' />}
                            text='Earnings' amount='$350.4' />
                    </div>
                    <div style={{ flex: '1', }}>
                        <SmallCard Icon={<AiTwotoneCalendar className='SmallCardLeftIcon' />}
                            text='Spend this month' amount='$1,500' />
                    </div>
                </div>

                <div style={{ flex: '1', }}>
                    <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                        text='Sales' amount='$580.56' />
                </div>
            </div>
            <div className='MainDashBodyDiv'>
                <div className='MainDashBodyDiv2'>
                    <div style={{ flex: '1', }}>
                        <SmallCard Icon={<FaDollarSign className='SmallCardLeftIcon' />}
                            text='Your balance' amount='$1200.56' />
                    </div>
                    <div style={{ flex: '1', }}>
                        <SmallCard Icon={<AiFillFileText className='SmallCardLeftIcon' />}
                            text='New Tasks' amount='567' /> 
                    </div>
                </div>

                <div style={{ flex: '1', }}>
                    <SmallCard Icon={<AiOutlineFileSearch className='SmallCardLeftIcon' />}
                        text='Total Projects' amount='56' />
                </div>
            </div>
        </div>
    )
}
