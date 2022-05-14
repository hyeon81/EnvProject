import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Select, Avatar, Row, Col, Tooltip} from "antd";
import {SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInfo from "../../json/UserInfo";

function MyArticle() {
    const navigate = useNavigate();
    const info = useContext(UserInfo);
    const [profile, setProfile] = useState('');

    useEffect(() => {
            const bodyFormData = new FormData();
            bodyFormData.append('id', info.state.id);
            bodyFormData.append('password', info.state.pwd);

            axios.post('http://environment.goldenmine.kr:8080/profile/currentprofile', bodyFormData)
                .then(res => {
                    console.log(res.data)
                    setProfile(res.data)
                })
        }, []
    )


    return (<>
        <div className="myArticle" style={{background: 'white', minHeight: '100vh', backgroundColor: 'white'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        My일지
                    </Col>
                    <Col span={1} style={{marginTop: '3px'}}>
                        <SettingFilled style={{fontSize: '24px'}}
                                       onClick={() => {
                                           navigate('/setting')
                                       }}/>
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
                        return (<div style={{width: '27.5vw', height: '27.5vw', float: 'left', border:'solid 1px white'}}
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

export default MyArticle;
