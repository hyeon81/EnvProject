import React from "react";
import {Col, Row, Space} from "antd";
import {ArrowLeftOutlined, RightOutlined, SettingFilled} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function Setting() {
    const navigate = useNavigate();
    return (
        <>
            <div className="Setting" style={{height: '100vh', backgroundColor: 'white'}}>
                <div className="top-nav" style={{
                    padding: '0 6%', fontSize: '20px',
                    backgroundColor: 'white', border: 'solid 1px lightgray'
                }}>
                    <Row style={{fontSize: '20px', color: 'black'}}>
                        <Col span={21}>
                            <Space size={10}>
                                <ArrowLeftOutlined onClick={() => {
                                    navigate(-1);
                                }}/>
                                <span style={{fontSize: '16px', fontWeight: 'bold'}}>비밀번호 변경</span>
                            </Space>
                        </Col>
                        <Col span={3} style={{fontWeight: 'bold', fontSize: '16px'}}>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Setting;