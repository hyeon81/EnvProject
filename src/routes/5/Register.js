import React, {useState} from "react";
import {
    Form,
    Input,
    Select,
    Button, Alert,
} from 'antd';
import axios from "axios";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


function Register() {
    const [form] = Form.useForm();
    this.state = {
        succeed : 0,
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        var bodyFormData = new FormData();
        bodyFormData.append('id', values["email"]);
        bodyFormData.append('password', values["password"]);
        bodyFormData.append('nickname', values["nickname"]);

        axios.post('/profile/register', bodyFormData).then(function (response) {
            console.log(response)
            this.setState({"succeed":response.data["register_succeed"] ? 2 : 1})
        })
            .catch(function (error) {
                console.log(error);
            });

    //     axios.({
    //         method: "post",
    //         url: "/profile/register",
    //         data: bodyFormData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //     })
    //         .then(function (response) {
    //             //handle success
    //             console.log(response);
    //         })
    //         .catch(function (response) {
    //             //handle error
    //             console.log(response);
    //         });
    };


    return (
        <>

            {typeof this.state.succeed != 0 ? ( this.state.succeed == 2 ? <Alert message="Success Text" type="success" /> :
                <Alert message="Error Text" type="error" /> ) : '' }
            <Form
                {...formItemLayout}
                form={form}
                className="register"
                name="register"
                onFinish={onFinish}
                // initialValues={{
                //     residence: ['zhejiang', 'hangzhou', 'xihu'],
                //     prefix: '86',
                // }}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="이메일"
                    style={{width: '200px'}}
                    rules={[
                        {
                            type: 'email',
                            message: '이메일의 형식이 아닙니다',
                        },
                        {
                            required: true,
                            message: '이메일을 입력해주세요',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="비밀번호"
                    style={{width: '200px'}}
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 입력해주세요',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="비밀번호 확인"
                    dependencies={['password']}
                    hasFeedback
                    style={{width: '200px'}}
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 확인해주세요',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('비밀번호가 일치하지 않습니다'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="닉네임"
                    style={{width: '200px'}}
                    rules={[
                        {
                            required: true,
                            message: '닉네임을 입력해주세요',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        회원가입
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Register;
