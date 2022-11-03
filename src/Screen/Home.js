import React from 'react';
import '../Styles/Home.css';
import {
  Button, Checkbox, Form, Input, Layout,
  Col, Row, Radio
} from 'antd';
import { HomeOutlined } from '@ant-design/icons';

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
            <HomeOutlined style={{ color: 'blue', fontSize: '20px', marginTop: '-20px', flex: '2' }} />
            <p style={{ color: 'blue', fontSize: '20px', flex: '2' }}>Home</p>
            <div style={{ flex: '4' }}>
            </div>
            <div className='HomeLeftLineDiv'></div>
          </div>

          <div className='HomeLeftDownButtonDiv'>
            <HomeOutlined style={{ color: 'blue', fontSize: '20px', marginTop: '-20px', flex: '2' }} />
            <p style={{ color: 'blue', fontSize: '20px', flex: '2' }}>Home</p>
            <div style={{ flex: '4' }}>
            </div>
            <div className='HomeLeftLineDiv'></div>
          </div>
          <Button type="text" className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: 'blue', fontSize: '20px', marginTop: '-20px',marginLeft:'10px' }} />
            <p style={{ color: 'blue', fontSize: '20px', marginLeft:'30px' }}>Home</p>
            
            <div className='HomeLeftLineDiv'></div>
          </Button>
          <div>ddd</div>
        </div>
      </div>
      <div className='HomeHeaderBodyDiv2'>
        <div>Main Dashbord</div>
      </div>
    </div>
  )
}
