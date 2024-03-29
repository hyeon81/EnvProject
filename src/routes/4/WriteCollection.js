import React from "react";
import {useNavigate} from "react-router-dom"
import {Button, Input, Form, Select, Upload, Image, Row, Col, Space, DatePicker} from 'antd';
import {ArrowLeftOutlined, UploadOutlined} from '@ant-design/icons';
import '../Style.css';

function WriteCollection() {
    const {TextArea} = Input;
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate("/plantdetail", true);
    }
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <div style={{backgroundColor: 'white', height: '100vh', width: '100%', paddingBottom: '40px'}}>
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
            <div className='write' style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <Form onFinish={onFinish} autoComplete="off" requiredMark={false} style={{
                    overflow: 'hidden',
                }}>
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
                    <div className={"input-list"}>
                        <div className={"a-input"}>
                            <div className="label4">종류</div>
                            <Form.Item name="species">
                                <div>지정값</div>
                            </Form.Item>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">날짜</div>
                            <Form.Item name="date" rules={[{required: true, message: ''}]}>
                                <DatePicker onChange={onChange} style={{width: '55vw'}}/>
                            </Form.Item>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">장소</div>
                            <Form.Item name="location" rules={[{required: true, message: ''}]}>
                                <Input style={{width: '38vw'}}/>
                            </Form.Item>
                            <Button style={{marginLeft: '4px'}} onClick={()=>{navigate('/selectaddress')}}>검색</Button>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">계절</div>
                            <Form.Item name="season" rules={[{required: true, message: ''}]}>
                                <Select style={{width: '55vw'}}>
                                    <Select.Option value="spring">봄</Select.Option>
                                    <Select.Option value="summer">여름</Select.Option>
                                    <Select.Option value="fall">가을</Select.Option>
                                    <Select.Option value="winter">겨울</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">색상</div>
                            <Form.Item name="color" rules={[{required: true, message: ''}]}>
                                <Input style={{width: '55vw'}}/>
                            </Form.Item>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">별칭</div>
                            <Form.Item name="byname" rules={[{required: true, message: ''}]}>
                                <Input style={{width: '55vw'}}/>
                            </Form.Item>
                        </div>
                        <div className={"a-input"}>
                            <div className="label4">특징</div>
                            <Form.Item name="content" rules={[{required: true, message: ''}]}>
                                <TextArea showCount maxLength={100} style={{height: 20}}
                                          style={{width: '55vw'}}/>
                            </Form.Item>
                        </div>
                        <Button type="primary" htmlType="submit" block
                                style={{marginBottom: '20%', marginTop: '36px', width: '100%'}}>
                            식생 길라잡이 등록
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default WriteCollection;
