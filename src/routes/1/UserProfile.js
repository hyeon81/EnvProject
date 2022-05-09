import React from "react";
import {Button, Form, Select, Avatar, Row, Col, Tooltip} from "antd";
import {ArrowLeftOutlined, SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import moment from "moment";

function UserProfile() {
    const navigate = useNavigate();
    const imgdata = ["/img/ENFJ.jpg", "/img/ENFP.jpg", "/img/ENTJ.jpg", "/img/ENTP.jpg", "/img/ESFJ.jpg", "/img/ESFP.jpg", "/img/ESTJ.jpg", "/img/ESTP.jpg", "/img/INFJ.jpg", "/img/INFP.jpg"];

    return (<>
        <div className="myArticle" style={{background: 'white', height: '100%'}}>
            <div className="top-nav">
                <Row style={{fontSize: '20px', padding: '0 6%'}}>
                    <Col span={21}>
                        <ArrowLeftOutlined onClick={() => {
                            navigate('/timeline')
                        }} style={{color: 'white'}}/>
                    </Col>
                </Row>
            </div>
            <div className="padding">
                <div className="profile" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    margin: '30px 0'
                }}>
                    <Avatar size={140} icon={<UserOutlined/>}/>
                    <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: '10px'}}>닉네임</div>
                    <div style={{fontSize: '13px', marginBottom: '2px', color: 'gray'}}>자기소개를 입력하세요</div>
                    <div className="label">꽃신 등급</div>
                </div>

                <div className="category">
                    <Select size={'small'} defaultValue='recent' style={{width: '32%'}}>
                        <Select.Option value="recent">최신순</Select.Option>
                        <Select.Option value="group">그룹순</Select.Option>
                    </Select>
                </div>
                <div className="gallery" style={{width: '100%', marginTop: '10px'}}>
                    {imgdata.map((item) => {
                        return (<img src={item} alt="img" width="32%" height="32%"
                                     style={{margin: '0.3%', border: 'solid 1px gray'}}/>)
                    })}
                </div>
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    </>);
}

export default UserProfile;
