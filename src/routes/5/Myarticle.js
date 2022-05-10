import React, {useContext, useEffect, useState} from "react";
import {Button, Form, Select, Avatar, Row, Col, Tooltip} from "antd";
import {SettingFilled, UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import UserInfo from "../../json/UserInfo";

function MyArticle() {
    const navigate = useNavigate();
    const info = useContext(UserInfo);

    let [nickname, SetNickname] = useState('이름없음')
    let [intro, SetIntro] = useState('설명없음')
    let [rank, SetRank] = useState('랭크없음')
    let [imgUrl, SetImgUrl] = useState('')
    let [articles, SetArticles] = useState([]);

    useEffect(() => {
        const bodyFormData = new FormData();
        bodyFormData.append('id', info.state.id);
        bodyFormData.append('password', info.state.pwd);

        axios.post('http://environment.goldenmine.kr:8080/profile/currentprofile', bodyFormData)
            .then(function (response){
                console.log(JSON.stringify(response.data))
                SetNickname(response.data["nickname"])
                SetIntro(response.data["introduction"])
                SetImgUrl(response.data["imageUrl"])
                SetRank(response.data["rank"])
                SetArticles(response.data["articleIds"])
            }).catch(function (error) {
            console.log(error)
        })
    }, [info.state.id, info.state.pwd]);

    return (<>
        <div className="myArticle" style={{background: 'white', height: '100%'}}>
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
                    <Avatar size={140} icon={<UserOutlined/>} src={imgUrl}/>
                    <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: '10px'}}>{nickname}</div>
                    <div style={{fontSize: '13px', marginBottom: '2px', color: 'gray'}}>{intro}</div>
                    <div className="label">{rank}</div>
                    <Button size={'small'} style={{fontSize: '13px', width: '120px', margin: '10px'}}
                            onClick={() => {
                                navigate('/profileEdit')
                            }}>프로필
                        수정</Button>
                </div>

                <div className="category">
                    <Select size={'small'} defaultValue='recent' style={{width: '32%'}}>
                        <Select.Option value="recent">최신순</Select.Option>
                        <Select.Option value="group">그룹순</Select.Option>
                    </Select>
                    <Button size={'small'} className="catebtn" onClick={()=>{navigate()}}>설정</Button>
                </div>
                <div className="gallery" style={{width: '100%', marginTop: '10px', height: '30vh'}}>
                    {articles.map((item) => {
                        let src = "http://environment.goldenmine.kr:8080/images/view/article-" + item + "-" + "0" + ".jpg"
                        return (<img src={src} alt="img" width="32%" height="32%"
                                     style={{margin: '0.3%', border: 'solid 1px gray'}}/>)
                    })}
                </div>
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    </>);
}

export default MyArticle;
