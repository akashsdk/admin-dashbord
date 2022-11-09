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
      <div style={{flex:'1'}}>
        <Link>
      <HomeOutlined />
        </Link>
      </div>
      <div style={{flex:'5'}}>aaa</div>
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
