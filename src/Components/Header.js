import React from 'react';
import './Header.css';
import { PageHeader } from 'antd';
import { Link, } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <PageHeader
      
        className="site-page-header"
        onBack={() =>{
          
        }}
        title="UK HR Cloud"
        subTitle=""
      />
    </div>
  )
}
