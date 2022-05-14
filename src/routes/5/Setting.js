import React, {useEffect, useState} from "react";
import {Col, Row, Space, message} from "antd";
import {ArrowLeftOutlined, RightOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import UserInfo from "../../json/UserInfo";
import axios from "axios";

function Setting() {
    const [profile, setProfile] = useState('')
    const navigate = useNavigate();
    const info = useContext(UserInfo);
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    info.state = {
        ...info.state,
        id: id,
        pwd: pwd,
    }

    info.action = {
        ...info.action,
        setId: setId,
        setPwd: setPwd
    }

    // useEffect(()=>{
    //     LoadData();
    // },[])
    //
    // async function LoadData() {
    //     const bodyFormData = new FormData();
    //     bodyFormData.append('id', info.state.id);
    //     bodyFormData.append('password', info.state.pwd);
    //     const {data: profileData} = await axios.post('http://environment.goldenmine.kr:8080/profile/currentprofile', bodyFormData)
    //     setProfile(profileData)
    // }

    function LogOut() {
        setId(null)
        setPwd(null)
        message.success('로그아웃되었습니다');
        navigate('/login')
    }

    return (
        <>
            <div className="Setting" style={{height: '100vh', backgroundColor: 'white'}}>
                <div className="top-nav" style={{
                    padding: '0 6%', fontSize: '20px',
                    backgroundColor: 'white', borderBottom: 'solid 1px lightgray'
                }}>
                    <Row style={{fontSize: '20px', color: 'black'}}>
                        <Col span={21}>
                            <Space size={10}>
                                <ArrowLeftOutlined onClick={() => {
                                    navigate(-1)
                                }}/>
                                <span style={{fontSize: '16px', fontWeight: 'bold'}}>설정</span>
                            </Space>
                        </Col>
                    </Row>
                </div>
                <ul style={{
                    listStyle: 'none', padding: '0'
                }}>
                    <li><span className="subinfo1">내 정보</span></li>
                    <li><span className="subinfo1" style={{paddingLeft: '10%'}}>이메일</span>
                        <span className="subinfo2" style={{paddingRight: '10%'}}>{info.state.id}</span></li>
                    <li><span className="subinfo1" style={{paddingLeft: '10%'}}
                    >비밀번호 변경</span>
                        <span className="subinfo2" onClick={()=>navigate('/pwchange')}
                        style={{cursor: 'pointer'}}><RightOutlined /></span></li>
                    <li><span className="subinfo1" style={{paddingLeft: '10%'}} onClick={LogOut}>로그아웃</span></li>
                    <li><span className="subinfo1">버전 정보</span></li>
                </ul>
            </div>
        </>
    )
}

export default Setting;