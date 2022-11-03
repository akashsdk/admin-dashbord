import React from 'react';
import '../Styles/Home.css';
import {
  Button, Checkbox, Form, Input, Layout,
  Col, Row, Radio
} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {

  return (
    <div className='HomeHeaderBody'>
      <div className='HomeHeaderBodyDiv'>
        <div className='HomeLeftDiv'>
          <h1 style={{ marginTop: '30px' }}>Admin Dashbord</h1>
        </div>
        <div className='HomeLine' />
        <div className='HomeLeftDownDiv'>
          <div className='HomeLeftDownButtonDiv'>

          </div>
          <div>ddd</div>
        </div>
      </div>
      <div className='HomeHeaderBodyDiv2'>
        <div>Main Dashbord</div>
      </div>
    </div>
  )
}
