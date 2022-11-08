import React from 'react';
import './Styles/MainDashboard.css';
import '../Card/Styles/SmallCard.css';
import SmallCard from '../Card/SmallCard';
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';
import { FaDollarSign } from "react-icons/fa";
import { AiFillFileText, AiOutlineFileSearch, AiTwotoneCalendar, } from "react-icons/ai";
import { Link, } from "react-router-dom";

export default function MainDashboard() {
    return (
        <div className='MainDashBody'>
            <div className='MainDashBodyDiv'>
                <div style={{ flex: '1', }}>
                    <SmallCard Icon={<Link to='/Profile' ><EditOutlined className='SmallCardLeftIcon' /></Link>}
                        text='Profile Status ( Complete )' amount='100%' />
                </div>
                <div style={{ flex: '1', }}>
                    <SmallCard Icon={<Link to='/EmployeesAccording' ><ProfileOutlined className='SmallCardLeftIcon' /></Link>}
                        text='Employees According to RTI' amount='10' />
                </div>
                
            </div>
        </div>
    )
}
