import React, {useEffect, useState} from "react";
import {
    ArrowLeftOutlined,
    DeleteFilled,
    EditFilled,
    LeftOutlined,
    RightOutlined,
    HeartOutlined,
    MessageOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import "./CurrentArticlestyle.css";
import axios from "axios";
import {Col, Row, Space} from "antd";

function CurrentArticle() {
    //웹에서 서버 요청
    const [article, setArticle] = useState([]);
    const getArticle = () => {
        axios.get("url").then((res) => setArticle(res.data));
    };
    useEffect(getArticle, []);

    return (
        <>
            <div className="CurrentArticle">
                <div className="top-nav">
                    <ArrowLeftOutlined className="right-nav"/>
                    <div className="left-nav">
                        <DeleteFilled/>
                        <EditFilled/>
                    </div>
                </div>
                <div className="userinfo">
                    <img
                        src="/img/avatar.jpg"
                        alt="avatar"
                        width="100px"
                        height="100px"
                    />
                    <div className="username">username</div>
                </div>

                <div>습도 70% 온도 25 미세먼지 나쁨</div>
                <div className="img-slide">
                    <Row style={{textAlign: 'center'}}>
                        <Col span={2}>
                            <LeftOutlined style={{fontSize: '24px', lineHeight: '20'}}/>
                        </Col>
                        <Col span={20}>
                            <img
                                src="/img/img1.png"
                                alt="userImage"
                                width="100%"
                                height="500px"
                            />
                        </Col>
                        <Col span={2}>
                            <RightOutlined style={{fontSize: '24px', lineHeight: '20'}}/>
                        </Col>
                    </Row>
                </div>

                <div className="mid-btn">
                    <Row style={{
                        padding: "0 12px"
                    }}>
                        <Col span={22}>
                            <Space size={6}>
                                <HeartOutlined style={{fontSize: '24px'}}/>
                                <MessageOutlined style={{fontSize: '24px'}}/>
                            </Space>
                        </Col>
                        <Col span={2}>
                            <ShareAltOutlined style={{fontSize: '24px'}}/>
                        </Col>
                    </Row>
                </div>
                <div className="content">{article.content}</div>
                <div className="comment-info">
                    <img src="/img/avatar.jpg" alt="avatar" width="50px" height="50px"/>
                    <div className="comment">
                        <span>username</span>comment
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrentArticle;
