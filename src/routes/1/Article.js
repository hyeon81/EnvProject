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

const contentStyle = {
    height: '310px',
    lineHeight: '310px',
    textAlign: 'center',
    margin: '0 auto',
};

function Article({props}) {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    useEffect(() => {
        // const fetchData = async () => {
        //     const res = await axios.get('http://localhost:8080/')
        //     if (res.data.type === 'liked')
        setLike(true)
        // }
        // await fetchData()
    }, []);

    const toggleLike = () => {
        // const res = await axios.post('http://localhost:8080/')
        // // [POST] 사용자가 좋아요를 누름 -> DB 갱신 setLike(!like)
        setLike(!like)
    }

    return (
        <>
            <div className="Article" style={{backgroundColor: 'white', height: '100%', cursor: 'pointer'}}>
                <div className="userinfo" style={{padding: '16px 8%', backgroundColor: 'lightgray'}}>
                    <Space size={12} onClick={()=>{navigate('/userprofile')}}>
                        <Avatar size={30} src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined/>}/>
                        <span className="username" style={{fontSize: '16px'}}>username</span>
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
                                <div>
                                    <img src={props.imageIds[0]} alt="userImage" style={contentStyle}/>
                                </div>
                                <div>
                                    <img src={props.imageIds[1]} alt="userImage" style={contentStyle}/>
                                </div>
                                <div>
                                    <img src={props.imageIds[2]} alt="userImage" style={contentStyle}/>
                                </div>
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
                                <LikeButton like={like} onClick={toggleLike}/>
                                <span
                                    style={{fontSize: '12px', marginLeft: '-10px'}}>
                                {`공감 ${props.liked}`}</span>
                                <MessageOutlined/> <span
                                onClick={() => {
                                    navigate('/selectedarticle')
                                }}
                                style={{
                                    fontSize: '12px',
                                    marginLeft: '-20px'
                                }}>{`댓글 ${data[0].articleIds[0].comments.length}`}</span>
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
                        navigate('/selectedarticle')
                    }}>
                        <p>{props.context}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
