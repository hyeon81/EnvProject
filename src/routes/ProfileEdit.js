import React from "react";
import {Avatar, Button, Col, Form, Input, Row, Space, Upload} from "antd";
import {ArrowLeftOutlined, DeleteFilled, EditFilled, UploadOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function ProfileEdit() {
    const navigate = useNavigate;
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    }

    return (
        <div className="profileEdit" style={{backgroundColor: 'white'}}>
            <div className="top-nav">
                <Row style={{fontSize: '20px', padding: '0 6%'}}>
                    <Col span={22}>
                        <Space size={8}>
                            <ArrowLeftOutlined onClick={() => {
                                navigate('/myarticle')
                            }}
                                               style={{color: 'white'}}/>
                            <span style={{fontSize: '16px'}}>프로필 수정</span>
                        </Space>
                    </Col>
                    <Col span={2} style={{float: 'right', fontWeight: 'bold', fontSize: '16px'}}>
                        <div htmlType="submit">저장</div>
                    </Col>
                </Row>
            </div>
            <div className="settingForm" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Form onFinish={onFinish} autoComplete="off">
                    <Avatar size={140} icon={<UserOutlined/>}/>
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
                    > <Input placeholder="닉네임을 입력해주세요"/> </Form.Item>
                    <div>자기소개</div>
                    <Form.Item name={['user', 'introduction']} label="">
                        <Input.TextArea placeholder="자기소개를 입력해주세요"/>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )

}

export default ProfileEdit;