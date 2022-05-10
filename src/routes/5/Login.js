import React, {createContext, useContext, useState} from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInfo from "../../json/UserInfo";

const Login = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const info = useContext(UserInfo)
    info.state = {
        ...info.state,
        id: id,
        pwd: pwd,
    }

    info.action = {
        ...info.action,
        setId: setId,
        setPwd: setPwd
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setId(values.email)
        setPwd(values.password)

        const bodyFormData = new FormData();
        bodyFormData.append('id', values["email"]);
        bodyFormData.append('password', values["password"]);

        axios.post('http://environment.goldenmine.kr:8080/profile/login', bodyFormData)
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
            console.log(error);
        })
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
                        message: '이메일을 입력해주세요',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '패스워드를 입력해주세요',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            {/*<Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}
            {/*<a className="login-form-forgot" href="">*/}
            {/*    비밀번호 찾기*/}
            {/*</a>*/}

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    로그인
                </Button>
                또는 <a href="" onClick={() => {
                navigate('/register')
            }}>회원가입</a>
            </Form.Item>
        </Form>
    );
};

export default () => <Login/>;