import React, { useState } from 'react';
import '../Styles/Home.css';
import {
  Button, Checkbox, Form, Input, Layout,
  Col, Row, Radio
} from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [page, setPage] = useState(1)

  return (
    <div className='HomeHeaderBody'>
      <div className='HomeHeaderBodyDiv'>
        <div className='HomeLeftDiv'>
          <h1 style={{ marginTop: '30px' }}>Admin Dashbord</h1>
        </div>
        <div className='HomeLine' />
        <div className='HomeLeftDownDiv'>
          <Button type="text" onClick={() => {
            setPage(1)
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 1 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 1 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>
            {page==1 ?(
              <div className='HomeLeftLineDiv'></div>
            ):(<></>)}
          </Button>

          <Button type="text" onClick={() => {
            setPage(2)
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 2 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 2 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>
            {page==2 ?(
              <div className='HomeLeftLineDiv'></div>
            ):(<></>)}
          </Button>

          <Button type="text" onClick={() => {
            setPage(3)
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 3 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 3 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>
            
            {page==3 ?(
              <div className='HomeLeftLineDiv'></div>
            ):(<></>)}
          </Button>
        </div>
      </div>
      <div style={{ height: 'auto', width: '73%', }}>
        <div className='HomeHeaderBodyDiv2'>
          <div>Main Dashbord</div>
        </div>
        <div>
          {
            page == 1 ? (
              <div> akash 1</div>
            ) : page == 2 ? (
              <div> akash 2</div>
            ) : page == 3 ? (
              <div> akash 3</div>
            ) : (
              <p>Page Error</p>
            )
          }
        </div>
      </div>

    </div>
  )
}
