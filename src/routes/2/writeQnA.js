import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom"
import {Checkbox, Button, Input, Form, Select, Upload, Image, Row, Col, Space} from 'antd';
import {ArrowLeftOutlined, CloseOutlined, UploadOutlined} from '@ant-design/icons';
import '../Style.css';
import axios from 'axios';
import "../../function/QnATopNavStyle.css"

function WriteQnA() {
    const {TextArea} = Input;
    const element = useRef(null);
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        const formData = new FormData()
        formData.append("category", values.category);
        formData.append("upload", values.upload);
        formData.append("checkbox", values.checkbox);
        formData.append("content", values.content);

        axios.post("", formData).then().catch((error) => {
            console.log(error);
        })
        navigate("/currentarticle", true);
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <>
            <div className="top-nav" style={{
                padding: '0 6%', fontSize: '20px',
                backgroundColor: 'white', border: 'solid 1px lightgray'
            }}>
                <Row style={{fontSize: '20px', color: 'black'}}>
                    <Col span={21}>
                        <Space size={10}>
                            <ArrowLeftOutlined onClick={() => {
                                navigate(-1)
                            }}/>
                            <span style={{fontSize: '16px', fontWeight: 'bold'}}>질문 등록</span>
                        </Space>
                    </Col>
                </Row>
            </div>
            <div className='writeqna'>
                <Form onFinish={onFinish} autoComplete="off" style={{
                    overflow: 'hidden',
                }}>
                    <Form.Item
                        name="upload"
                        label=""
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" listType="picture"
                                beforeUpload={() => false}>
                            <Button icon={<UploadOutlined/>}>사진 업로드</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="질문" name="title" rules={[{required: true, message: '제목을 입력하세요!'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="content" rules={[{required: true, message: '내용을 입력하세요!'}]}>
                        <TextArea showCount maxLength={100} style={{height: 120}} ㅓ/>
                    </Form.Item>
                    <Button type="primary" className="submitbtn" htmlType="submit" block>
                        식생 길라잡이 등록
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default WriteQnA;
