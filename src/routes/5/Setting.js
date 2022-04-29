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
                                    navigate('/myarticle')
                                }}/>
                                <span style={{fontSize: '16px', fontWeight: 'bold'}}>설정</span>
                            </Space>
                        </Col>
                        <Col span={3} style={{fontWeight: 'bold', fontSize: '16px'}}>
                        </Col>
                    </Row>
                </div>
                <ul style={{
                    listStyle: 'none', padding: '0'
                }}>
                    <li><span className="subinfo1">내 정보</span></li>
                    <li><span className="subinfo1" style={{paddingLeft: '10%'}}>이메일</span>
                        <span className="subinfo2" >example@email.com</span></li>
                    <li><span className="subinfo1"style={{paddingLeft: '10%'}}
                    >비밀번호 변경</span>
                        <span className="subinfo2" onClick={()=>navigate('/pwchange')}
                        style={{cursor: 'pointer'}}><RightOutlined /></span></li>
                    <li><span className="subinfo1">버전 정보</span></li>
                </ul>
            </div>
        </>
    )
}

export default Setting;