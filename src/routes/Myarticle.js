import React from "react";
import {Button, Form, Select, Avatar, Row, Col} from "antd";
import {SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

function MyArticle() {
    const navigate = useNavigate();

    return (
        <>
            <div className="myArticle" style={{background: 'white'}}>
                <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                    <Row>
                        <Col span={22}>
                            My일지
                        </Col>
                        <Col span={2} style={{marginTop: '3px'}}>
                            <SettingFilled style={{fontSize: '24px'}}/>
                        </Col>
                    </Row>
                </div>
                <div className="padding">
                    <div className="profile" style={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', textAlign: 'center', margin: '20px 0'
                    }}>
                        <Avatar size={140} icon={<UserOutlined/>}/>
                        <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: '10px'}}>닉네임</div>
                        <div style={{fontSize: '13px', marginBottom: '2px', color: 'gray'}}>자기소개를 입력하세요</div>
                        <div className="label">꽃신 등급</div>
                        <Button size={'small'} style={{fontSize: '13px', width: '120px', margin: '10px'}}
                                onClick={()=>{navigate('/profileEdit')}}>프로필
                            수정</Button>
                    </div>

                    <div className="category">
                        <Select size={'small'} defaultValue='recent' style={{width: '80px'}}>
                            <Select.Option value="recent">최신순</Select.Option>
                            <Select.Option value="group">그룹순</Select.Option>
                        </Select>
                        <Button size={'small'} className="catebtn">설정</Button>
                    </div>
                    <div className="gallery">
                        <span className="gallery-image">
                        <img src="/img/img1.png" width='100%' height='100%'/></span>
                        <span className="gallery-image">
                            <img src="/img/img1.png" width='100%' height='100%'/></span>
                        <span className="gallery-image">
                            <img src="/img/img1.png" width='100%' height='100%'/></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyArticle;
