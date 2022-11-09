import React from 'react';
import './Header.css';
import { BackTop, PageHeader } from 'antd';
import { Link, } from "react-router-dom";
import {
  HomeOutlined,
} from '@ant-design/icons';



export default function Header() {
  return (
    <div className='Header-Body'>
      <div style={{
        flex: '1',
        display: 'flex',
        marginLeft: '2%',
        alignItems: 'center',
      }}>
        <Link to='/'>
          <HomeOutlined style={{ fontSize: '30px' }} />
        </Link>
        <p className='Header-Title'>UK HR Cloud</p>
      </div>
      <div style={{ flex: '1' }}></div>
      {/* <PageHeader
      
        className="site-page-header"
        onBack={() =>{
          
        }}
        title="UK HR Cloud"
        subTitle=""
      /> */}
    </div>
  )
}
