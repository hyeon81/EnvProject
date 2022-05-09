import React from "react";
import {Button, Col, Form, Input, Row, Space} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function CategoryAdd() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log(values);
        navigate('/categorysetting')
    }

    return (
        <>
            <div className="CategoryAdd background">
                <Form onFinish={onFinish} autoComplete="off">
                    <div className="top-nav">
                        <Row style={{
                            fontSize: '20px', padding: '0 4%', backgroundColor: 'white',
                            color: 'black', borderBottom: 'solid 1px lightgray'
                        }}>
                            <Col span={21}>
                                <Space size={8}>
                                    <CloseOutlined onClick={() => {
                                        navigate(-1);
                                    }}/>
                                    <span style={{fontSize: '16px'}}>카테고리 추가</span>
                                </Space>
                            </Col>
                            <Col span={3} style={{fontSize: '16px'}} >
                                <Button type="text" htmlType="submit">확인</Button>
                            </Col>
                        </Row>
                    </div>
                        <Form.Item label="카테고리 이름" name="category" rules={[{required: true, message: '카테고리 이름을 입력하세요!'}]}
                                   style={{marginTop: '30px', padding: '0 8%'}}>
                            <Input/>
                        </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default CategoryAdd;