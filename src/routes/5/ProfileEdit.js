import React from "react";
import {Avatar, Button, Col, Form, Input, Row, Space, Upload} from "antd";
import {ArrowLeftOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function ProfileEdit() {
    const navigate = useNavigate();
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/myarticle');
    }

    return (
        <div className="profileEdit" style={{backgroundColor: 'white', height: '100vh'}}>
            <Form onFinish={onFinish} autoComplete="off">
                <div className="top-nav">
                    <Row style={{fontSize: '20px', padding: '0 4%'}}>
                        <Col span={20}>
                            <Space size={8}>
                                <ArrowLeftOutlined onClick={() => {
                                    navigate('/myarticle');
                                }} style={{color: 'white'}}/>
                                <span style={{fontSize: '16px'}}>프로필 수정</span>
                            </Space>
                        </Col>
                        <Col span={4}>
                            <Button type="text" htmlType="submit" style={{color: 'white', fontSize: '16px'}}>저장</Button>
                        </Col>
                    </Row>
                </div>
                <div className="settingForm" style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '0 8%'
                }}>
                    <Avatar size={140} icon={<UserOutlined/>} style={{margin: '30px'}}/>
                    <Form.Item
                        rules={[{required: true, message: '파일을 선택하세요!'}]}
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
                    <div>닉네임</div>
                    <Form.Item name={['user', 'name']} label=""
                               rules={[{required: true, message: ''}]}
                    > <Input placeholder="닉네임을 입력해주세요" style={{width: '300px'}}
                    /> </Form.Item>
                    <div>자기소개</div>
                    <Form.Item name={['user', 'introduction']} label=""
                               rules={[{required: true, message: ''}]}
                    >
                        <Input.TextArea placeholder="자기소개를 입력해주세요" style={{width: '300px'}}/>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )

}

export default ProfileEdit;