import React, { useState } from 'react';
import '../Styles/Home.css';
import MainDashboard from '../IndexPage/MainDashboard';


import {
  Button, Checkbox, Form, Input, Layout,
  Col, Row, Radio, message, notification,
  Drawer, Space, Modal, Popconfirm
} from 'antd';
import { HomeOutlined, SearchOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;
const key = 'updatable';
const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  notification.open(args);
};


export default function Home() {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='HomeHeaderBody'>
      {/* Admin Dashbord LeftSide */}
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
                content: 'Main Dashboard',
                key,
                duration: 2,
              });
            }, 1000);
          }} className='HomeLeftDownButton'>
            <HomeOutlined style={{ color: page == 1 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
            <p style={{ color: page == 1 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Main Dashboard</p>
            {page == 1 ? (
              <div className='HomeLeftLineDiv1'></div>
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
      <div style={{ height: 'auto', width: '100%', }}>
        {/* Top Dashboard RightSide*/}
        <div className='HomeHeaderBodyDiv2'>
          <div style={{ flex: '1.5' }}>
            {
              page == 1 ? (
                <h3 style={{ opacity: '.6', marginTop: '10px' }}>Page / Main</h3>
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
          <div style={{ flex: '1.5' }} />
          <div className='HomeSearchDiv'>
            <Input placeholder="Search" className='HomeSearchInput' prefix={<SearchOutlined />} />
            <MenuOutlined onClick={showDrawer} className='HomeSearchMenu' />
            <BellOutlined onClick={openNotification} className='HomeSearchNotification' />
            {/* RightSide Drawer*/}
            <Drawer
              title=""
              placement='left'
              width={300}
              onClose={onClose}
              open={open}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="primary" onClick={onClose}>
                    OK
                  </Button>
                </Space>
              }
            >
              <div className='HomeLeftDownDiv'>
                <Button type="text" onClick={() => {
                  setPage(1);
                  message.loading({
                    content: 'Loading...',
                    key,
                  });
                  setTimeout(() => {
                    message.success({
                      content: 'Main Dashboard',
                      key,
                      duration: 2,
                    });
                  }, 1000);
                }} className='HomeLeftDownButton'>
                  <HomeOutlined style={{ color: page == 1 ? 'blue' : 'rgb(152, 152, 158)', fontSize: '20px', marginTop: '-20px', marginLeft: '10px' }} />
                  <p style={{ color: page == 1 ? 'black' : 'rgb(152, 152, 158)', fontSize: '20px', marginLeft: '30px' }}>Main Dashboard</p>
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
            </Drawer>
            <div onClick={showModal} className='HomeSearchProfile'></div>
            <Modal title="👋  Hey, Akash" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <Link style={{ marginTop:'15px' }} to="/Profile">Profile Setting</Link>
                <Link style={{ marginTop:'15px' }} to="/">Newsletter Setting</Link>
                <Link style={{ color: 'red',marginTop:'15px' }} to="/SignIn">Log out</Link>
              </div>

            </Modal>
          </div>
          <div style={{ width: '10px' }} />
        </div>
        {/* Down Dashboard RightSide */}
        <div>
          {
            page == 1 ? (
              // Main Dashboard
              <div>
                <MainDashboard />
              </div>
            ) : page == 2 ? (
              <div> akash 2</div>
            ) : page == 3 ? (
              <div>
                akash 3
              </div>
            ) : (
              <p>Page Error</p>
            )
          }
        </div>
      </div>

    </div>
  )
}
