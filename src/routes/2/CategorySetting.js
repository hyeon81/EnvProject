import React from "react";
import {Col, Row, Space} from "antd";
import {ArrowLeftOutlined, PlusOutlined, RightOutlined, SettingFilled} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function CategorySetting() {
    const navigate = useNavigate();
    return (
        <>
            <div className="Setting" style={{height: '100vh', backgroundColor: 'white'}}>
                <div className="top-nav">
                    <Row style={{
                        fontSize: '20px', padding: '0 4%', backgroundColor: 'white',
                        color: 'black', borderBottom: 'solid 1px lightgray'
                    }}>
                        <Col span={22}>
                            <Space size={8}>
                                <ArrowLeftOutlined onClick={() => {
                                    navigate(-1);
                                }}/>
                                <span style={{fontSize: '16px'}}>카테고리 수정</span>
                            </Space>
                        </Col>
                        <Col span={2}>
                            <PlusOutlined />
                        </Col>
                    </Row>
                </div>
                <ul style={{
                    listStyle: 'none', padding: '0'
                }}>
                    <li><span className="subinfo1">기본</span>
                        <span className="subinfo2">수정</span></li>
                </ul>
            </div>
        </>
    )
}

export default CategorySetting;