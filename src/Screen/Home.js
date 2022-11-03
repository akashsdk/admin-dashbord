import React, { useState } from 'react';
import '../Styles/Home.css';
import {
  Button, Checkbox, Form, Input, Layout,
  Col, Row, Radio, message,
} from 'antd';
import { HomeOutlined, SearchOutlined,BellOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const key = 'updatable';


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
            setPage(1);
            message.loading({
              content: 'Loading...',
              key,
            });
            setTimeout(() => {
              message.success({
                content: 'Home Page',
                key,
                duration: 2,
              });
            }, 1000);
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 1 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 1 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>
            {page == 1 ? (
              <div className='HomeLeftLineDiv'></div>
            ) : (<></>)}
          </Button>

          <Button type="text" onClick={() => {
            setPage(2);
            message.loading({
              content: 'Loading...',
              key,
            });
            setTimeout(() => {
              message.success({
                content: 'Home Page 2',
                key,
                duration: 2,
              });
            }, 1000);
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 2 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 2 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>
            {page == 2 ? (
              <div className='HomeLeftLineDiv'></div>
            ) : (<></>)}
          </Button>

          <Button type="text" onClick={() => {
            setPage(3);
            message.loading({
              content: 'Loading...',
              key,
            });
            setTimeout(() => {
              message.success({
                content: 'Home Page',
                key,
                duration: 2,
              });
            }, 1000);
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 3 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 3 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Home</p>

            {page == 3 ? (
              <div className='HomeLeftLineDiv'></div>
            ) : (<></>)}
          </Button>
        </div>
      </div>
      <div style={{ height: 'auto', width: '73%', }}>
        <div className='HomeHeaderBodyDiv2'>
          <div style={{ flex: '1' }}>
            {
              page == 1 ? (
                <h3 style={{ opacity: '.6', marginTop: '10px' }}>Page / Home 1</h3>
              ) : page == 2 ? (
                <h3 style={{ opacity: '.6', marginTop: '10px' }}>Page / Home 2</h3>
              ) : page == 3 ? (
                <h3 style={{ opacity: '.6', marginTop: '10px' }}>Page / Home 3</h3>
              ) : (
                <p>Page Error</p>
              )
            }

            <h1 style={{ marginTop: '-15px' }}>Dashbord</h1>
          </div>
          <div style={{ flex: '2' }} />
          <div className='HomeSearchDiv'>
            <Input placeholder="Search" className='HomeSearchInput' prefix={<SearchOutlined />} />
            <BellOutlined className='HomeSearchNotification' />
          </div>
          <div style={{ width: '10px' }} />
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
