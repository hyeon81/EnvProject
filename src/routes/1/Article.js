import React, {useEffect, useState} from "react";
import {
    MessageOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "../Style.css";
import {Avatar, Col, Row, Space, Carousel} from "antd";
import {useNavigate} from "react-router-dom";
import data from "../../json/Userdata.json";
import LikeButton from "../../function/LikeButton";

import axios from "axios";
import {useContext} from "react";
import UserInfo from "../../json/UserInfo";
import BottomNav from "../../function/BottomNav";

const contentStyle = {
    height: '310px',
    lineHeight: '310px',
    textAlign: 'center',
    margin: '0 auto',
};

function Article({props}) {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const [profile, setProfile] = useState('');
    const [plus, setPlus] = useState(0)
    const info = useContext(UserInfo);

    const bodyFormData2 = new FormData();
    bodyFormData2.append('id', info.state.id)
    bodyFormData2.append('password', info.state.pwd)
    bodyFormData2.append('type', 'article')
    bodyFormData2.append('articleId', props.id)

    useEffect(() => {
        // 좋아요 가져오기
        setPlus(props.plusCount)

        // axios.post('http://environment.goldenmine.kr:8080/article/isplus', bodyFormData2)
        //     .then(res => {
        //         setLike(res.data.plus)
        //     })

        const bodyFormData = new FormData();
        bodyFormData.append('id', props.authorId);
        // axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData)
        //     .then(res => {
        //         setProfile(res.data)
        //     })
    }, []);

    const toggleLike = () => {
        setLike(!like)

        if (like) {
            // axios.post('http://environment.goldenmine.kr:8080/article/unplus', bodyFormData2)
            //     .then(res => {
            //         console.log('좋아요 취소')
            //         console.log(res.data)
            //         setPlus(plus - 1)
            //     })
        }
        else if(!like){
            // axios.post('http://environment.goldenmine.kr:8080/article/plus', bodyFormData2)
            //     .then(res => {
            //         console.log('좋아요')
            //         console.log(res.data)
            //         setPlus(plus + 1)
            //     })
        }
        // // [POST] 사용자가 좋아요를 누름 -> DB 갱신 setLike(!like)
    }

    function ImageSlide() {
        const imagarray = [];
        if (props.imageCount <= 0) {
            return (<div><img alt="이미지가 존재하지 않습니다" style={contentStyle}/></div>)
        }
        for (let i = 0; i < props.imageCount; i++) {
            imagarray.push(
                <div>
                    <img src="/img/2021062427499722.jpg" alt="userImage" style={contentStyle}/>
                </div>
            )
        }
        return imagarray
    }


    return (
        <>
            <div className="Article" style={{backgroundColor: 'white', height: '100%', cursor: 'pointer'}}>
                <div className="userinfo" style={{padding: '16px 8%', backgroundColor: 'lightgray'}}>
                    <Space size={12} onClick={() => {
                        navigate('/userprofile/' + props.authorId)
                    }}>
                        <Avatar size={30} src={'http://environment.goldenmine.kr:8080/images/view/' + props.authorId}
                                icon={<UserOutlined/>}/>
                        <span className="username" style={{fontSize: '16px'}}>{"닉네임"}</span>
                    </Space>
                </div>

                <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '20px 0 4px'}}>
                    <p>{props.weather}</p>
                </div>

                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
                            {/*<LeftOutlined style={{fontSize: '24px', color: '#1abc9c'}}/>*/}
                        </Col>
                        <Col span={20} style={{width: '100%', backgroundColor: 'lightgray'}}>
                            <Carousel>
                                {ImageSlide()}
                            </Carousel>
                        </Col>
                        <Col span={2}>
                            {/*<RightOutlined style={{fontSize: '24px', color: '#1abc9c'}}/>*/}
                        </Col>
                    </Row>
                </div>

                <div className="padding">
                    <Row style={{fontSize: '20px', margin: '8px 0'}}>
                        <Col span={22}>
                            <Space size={12}>
                                <LikeButton like={like} onClick={()=>{toggleLike()}}/>
                                <span
                                    style={{fontSize: '12px', marginLeft: '-8px', lineHeight: '30px'}}>
                                공감 {plus}</span>
                                <MessageOutlined/> <span
                                onClick={() => {
                                    navigate('/selectedarticle/' + props.id)
                                }}
                                style={{
                                    fontSize: '12px',
                                    marginLeft: '-18px',
                                    lineHeight: '30px'
                                }}>댓글 {props.commentIds.length}</span>
                            </Space>
                        </Col>
                        <Col span={2}>
                            {/*<ShareAltOutlined/>*/}
                        </Col>
                    </Row>
                    <div className="content" style={{
                        lineHeight: '1.5', textAlign: 'justify', height: '40px',
                        overflowX: 'hidden', marginBottom: '24px'
                    }} onClick={() => {
                        navigate('/selectedarticle/' + props.id)
                    }}>
                        <p>{props.context}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
