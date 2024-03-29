import React, {useRef} from "react";
import {useNavigate} from "react-router-dom"
import {Checkbox, Button, Input, Form, Select, Upload, Row, Col, Space} from 'antd';
import {ArrowLeftOutlined, UploadOutlined} from '@ant-design/icons';
import '../Style.css';
import axios from 'axios';

function EditArticle() {
    const {TextArea} = Input;
    const element = useRef(null);
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        navigate("/currentarticle", true);
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    // 체크박스 on off
    function onChangeCheckbox(e) {
        let checked = e.target.checked;
        if (checked === true) {
            element.current.style.display = 'block';
        } else {
            element.current.style.display = 'none';
        }
    }

    return (
        <div className='write' style={{width: '100vw'}}>
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
        <div className='toolbox'>
            도구함
        </div>
        <Form onFinish={onFinish} autoComplete="off">
            <div className="category">
                <Form.Item name="category" style={{width: 120}} rules={[{required: true, message: '카테고리를 선택하세요!'}]}>
                    <Select>
                        <Select.Option value="basic">기본</Select.Option>
                    </Select>
                </Form.Item>
                <Button className="catebtn" onClick={()=>(navigate('/categorysetting'))}>설정</Button>
            </div>
            <Form.Item
                rules={[{required: true, message: '파일을 선택하세요!'}]}
                name="upload"
                label=""
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" listType="picture"
                        beforeUpload={()=>false}>
                    <Button icon={<UploadOutlined/>}>사진 업로드</Button>
                </Upload>
            </Form.Item>
            <div className="weatherset">
                <div className="weatherinfo" ref={element}>날씨아이콘 습도 70% 온도 25 미세먼지 나쁨</div>
                <Form.Item name="checkbox" valuePropName="checked">
                    <Checkbox onChange={onChangeCheckbox}>날씨 정보 넣기</Checkbox>
                </Form.Item>
            </div>
            <Form.Item name="content" rules={[{required: true, message: '내용을 입력하세요!'}]}>
                <TextArea showCount maxLength={100} style={{height: 120}}/>
            </Form.Item>
            <Button type="primary" className="submitbtn" htmlType="submit" block>
                성장일지 등록하기
            </Button>
        </Form>
    </div>);
}

export default EditArticle;