import React, { useState } from 'react';
import './SignIn.css';
import { Col, Row, Button, Checkbox, Form, Input } from 'antd';
import { Link, } from "react-router-dom";
import { ArrowLeftOutlined, } from '@ant-design/icons';
import { FcGoogle } from "react-icons/fc";
import Footer from './Footer.js';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function SignIn() {
    return (
        <div>
            <Row>
                <Col className='SignInLeft'>
                    <Link to="/" className='SignInLeftLink'>
                        <ArrowLeftOutlined className='SignInLeftIcon' />
                        <h2 style={{ opacity: '.4', marginTop: '15px' }}>Go Back</h2>
                    </Link>
                    <div className='SignInLefLine'></div>
                    <div style={{ margin: '20px', display: 'flex', flexDirection: 'column', }}>
                        <p style={{ fontSize: '30px', }}>Sign In</p>
                        <p style={{ fontSize: '15px', marginTop: '-25px', opacity: '.5' }}>Enter your email and password to sign in!</p>
                        <button className='SignInLefButton'>
                            <FcGoogle className='SignInLefButtonIcon' />
                            <p className='SignInLefButtonP'>Sign in with Google</p>
                        </button>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <div className='SignInLefLine2' />
                            <div className='SignInLefLine3'>or</div>
                            <div className='SignInLefLine2' />
                        </div>
                        <div style={{ marginTop: '30px', }}>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="E-mail"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <button className='SignInLefButton' type="primary" >
                                    <p className='SignInLefButtonP'>SUBMIT</p>
                                </button>
                            </Form>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                            <h3>Not registered yet? 
                            <Link to="/LogIn" >Create an Account</Link>
                                </h3>
                                
                        </div>

                    </div>
                </Col>
                <Col className='SignInRight'>col-12</Col>
            </Row>
            <Footer />
        </div>
    )
}
