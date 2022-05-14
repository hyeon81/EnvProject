import React, {useEffect, useState} from "react";
import {Button, Form, Select, Avatar, Row, Col, Tooltip} from "antd";
import {ArrowLeftOutlined, SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";
import axios from "axios";

function UserProfile() {
    const navigate = useNavigate();
    const {userid} = useParams();
    const [profile, setProfile] = useState('');

    useEffect(() => {
            const bodyFormData = new FormData();
            bodyFormData.append('id', userid);
            console.log(userid)

            axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData)
                .then(res => {
                    console.log(res.data)
                    setProfile(res.data)
                })
        }, []
    )

    return (<>
        <div className="myArticle" style={{background: 'white', minHeight: '100vh'}}>
            <div className="top-nav">
                <Row style={{fontSize: '20px', padding: '0 6%'}}>
                    <Col span={21}>
                        <ArrowLeftOutlined onClick={() => {
                            navigate(-1)
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
                    <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: '10px'}}>{profile.nickname}</div>
                    <div style={{fontSize: '13px', marginBottom: '2px', color: 'gray'}}>{profile.introduction}</div>
                    <div className="label">{profile.rank}</div>
                </div>

                <div className="category">
                    <Select size={'small'} defaultValue='recent' style={{width: '32%'}}>
                        <Select.Option value="recent">최신순</Select.Option>
                        <Select.Option value="group">그룹순</Select.Option>
                    </Select>
                </div>
                <div className="gallery" style={{width: '100%', marginTop: '10px'}}>
                    {profile && profile.articleIds.map((item) => {
                        return (<div style={{width: '27.5vw', height: '27.5vw', float:'left', border:'solid 1px white'}}
                            onClick={()=>{navigate('/selectedarticle/'+item)}}>
                                <img
                                    src={'http://environment.goldenmine.kr:8080/images/view/article-' + item + '-0.jpg'}
                                    alt="img"
                                    onError={(e) => {
                                        e.target.src = '/img/noimage.jpg'
                                    }} width="100%" height="100%"
                                    style={{margin: '0.3%'}}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    </>);
}

export default UserProfile;
