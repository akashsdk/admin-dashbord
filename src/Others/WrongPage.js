import React from 'react';
import { Button, Result } from 'antd';
import { Link, } from "react-router-dom";

export default function WrongPage() {
    return (
        <div style={{
            marginTop: '20px',
        }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={""}
            />
            <div style={{
                height:'20px'
            }}/>
            <Link state={{
                    color: '#fff',
                }} to="/">Go Back Home</Link>
        </div>
    )
}
