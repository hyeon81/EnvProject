import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const navigate = useNavigate();

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                type="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                {/*<Form.Item name="remember" valuePropName="checked" noStyle>*/}
                {/*    <Checkbox>Remember me</Checkbox>*/}
                {/*</Form.Item>*/}
                <a className="login-form-forgot" href="">
                    비밀번호 찾기
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    로그인
                </Button>
                 　또는　<a href="" onClick={()=>{navigate('/register')}}>회원가입</a>
            </Form.Item>
        </Form>
    );
};

export default () => <Login />;