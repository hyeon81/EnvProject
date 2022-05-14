import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Select, Avatar, Row, Col, Tooltip} from "antd";
import {SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInfo from "../../json/UserInfo";
import QnAlist from "../2/QnAlist";

function MyArticle() {
    const navigate = useNavigate();
    const info = useContext(UserInfo);
    const [profile, setProfile] = useState('');
    const [rank, setRank] = useState('칭호없음')
    const [set, setSet] = useState(new Set())
    const [artIds, setArtIds] = useState([])
    const [cate, setCate] = useState('')

    async function LoadData() {
        const bodyFormData = new FormData();
        bodyFormData.append('id', info.state.id);
        bodyFormData.append('password', info.state.pwd);

        const {data: profileData} = await axios.post('http://environment.goldenmine.kr:8080/profile/currentprofile', bodyFormData)
        setProfile(profileData)

        const bodyFormData3 = new FormData();
        bodyFormData3.append('type', 'article');
        for (const ids of profileData.articleIds)
            bodyFormData3.append('ids', ids);
        const {data: data2} = await axios.post('http://environment.goldenmine.kr:8080/article/getarticles', bodyFormData3)
        data2.map(item => set.add(item.title));
        setArtIds(data2)
        // rank 부분
        if (profileData.articleIds.length === 1) {
            setRank('설렘가득 등록자')
        } else if (profileData.articleIds.length <= 3) {
            setRank('희망찬 등록자')
        } else if (profileData.articleIds.length <= 6) {
            setRank('열정만점 탐사가')
        } else if (profileData.articleIds.length <= 9) {
            setRank('일취월장 수집가')
        } else if (profileData.articleIds.length <= 15) {
            setRank('범접불가 선구자')
        }
    }

    useEffect(()=>{
        LoadData();
    },[])


    function onClickCate(item) {
        setCate(item)
    }

    return (<>
        <div className="myArticle"
             style={{background: 'white', minHeight: '100vh', minheight: '100%', backgroundColor: 'white'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        My일지
                    </Col>
                    <Col span={1} style={{marginTop: '3px'}}>
                        <SettingFilled style={{fontSize: '24px'}}
                                       onClick={() => {navigate('/setting')}}/>
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
                    <Avatar size={140} icon={<UserOutlined/>}
                            src={'http://environment.goldenmine.kr:8080/images/view/' + info.state.id}/>
                    <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: '10px'}}>{profile.nickname}</div>
                    <div style={{fontSize: '13px', marginBottom: '2px', color: 'gray'}}>{profile.introduction}</div>
                    <div className="label">{rank}</div>
                    <Button size={'small'} style={{fontSize: '13px', width: '120px', margin: '10px'}}
                            onClick={() => {
                                navigate('/profileEdit')
                            }}>프로필 수정</Button>
                </div>

                <div className="category">
                    <Select size={'small'} defaultValue='recent' style={{width: '32%'}}>
                        <Select.Option value="recent" style={{borderBottom: 'solid 0.5px lightgray'}}>{<span onClick={()=>{onClickCate('')}}>최신순</span>}</Select.Option>
                        {Array.from(set).map((item) => {
                            return (<Select.Option value={item}>{<span onClick={()=>{onClickCate(item)}}>{item}</span>}</Select.Option>)
                        })}
                    </Select>
                </div>
                <div className="gallery" style={{width: '100%', marginTop: '10px', height: '100%'}}>
                    {profile && Array.from(artIds).filter((item) => {
                    if (cate == '') {
                    return item
                    } else if (item.title.includes(cate)) {
                    return item
                    }
                    }).map(item => {
                        return (
                            <div style={{width: '27.5vw', height: '27.5vw', float: 'left', border: 'solid 2px white'}}
                                 onClick={() => {
                                     navigate('/selectedarticle/' + item.id)
                                 }}>
                                <img
                                    src={'http://environment.goldenmine.kr:8080/images/view/article-' + item.id + '-0.jpg'}
                                    alt="img"
                                    onError={(e) => {
                                        e.target.src = '/img/noimage.jpg'
                                    }} width="100%" height="100%"
                                    style={{margin: '0.3%'}}/>
                            </div>
                        )
                    })}
                    {/*{profile && profile.articleIds.map((item) => {*/}
                    {/*    return (*/}
                    {/*        <div style={{width: '27.5vw', height: '27.5vw', float: 'left', border: 'solid 2px white'}}*/}
                    {/*             onClick={() => {*/}
                    {/*                 navigate('/selectedarticle/' + item)*/}
                    {/*             }}>*/}
                    {/*            <img*/}
                    {/*                src={'http://environment.goldenmine.kr:8080/images/view/article-' + item + '-0.jpg'}*/}
                    {/*                alt="img"*/}
                    {/*                onError={(e) => {*/}
                    {/*                    e.target.src = '/img/noimage.jpg'*/}
                    {/*                }} width="100%" height="100%"*/}
                    {/*                style={{margin: '0.3%'}}/>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})}*/}
                </div>
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    </>);
}

export default MyArticle;
