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
            <div className="CurrentArticle" style={{backgroundColor: 'white', height: '100%'}}>
                <div className="top-nav">
                    <Row style={{fontSize: '20px', padding: '0 8%'}}>
                        <Col span={21}>
                            <ArrowLeftOutlined className="right-nav"/>
                        </Col>
                        <Col span={3}>
                            <Space size={12} style={{float: 'right'}}>
                                <DeleteFilled/>
                                <EditFilled/>
                            </Space>
                        </Col>
                    </Row>
                </div>
                <div className="userinfo" style={{padding: '8px 8%', backgroundColor: 'lightgray'}}>
                    <Space size={12}>
                        <img
                            src="/img/avatar.jpg"
                            alt="avatar"
                            width="35px"
                            height="35px"
                        />
                        <span className="username">username</span>
                    </Space>
                </div>

                <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '16px 0 4px'}}>
                    습도 70% 온도 25 미세먼지 나쁨
                </div>

                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
                            <LeftOutlined style={{fontSize: '24px'}}/>
                        </Col>
                        <Col span={20} style={{width: '100%', backgroundColor: 'lightgray'}}>
                            <img
                                src="/img/img1.png"
                                alt="userImage"
                                width="300px"
                                height="300px"
                            />
                        </Col>
                        <Col span={2}>
                            <RightOutlined style={{fontSize: '24px'}}/>
                        </Col>
                    </Row>
                </div>

                <div className="padding">
                    <Row style={{fontSize: '24px'}}>
                        <Col span={22}>
                            <Space size={12}>
                                <HeartOutlined/>
                                <MessageOutlined/>
                            </Space>
                        </Col>
                        <Col span={2} style={{float: 'right'}}>
                            <ShareAltOutlined/>
                        </Col>
                    </Row>
                    <div className="content" style={{lineHeight: '1.3'}}>Text - Double click to edit Text -
                        Double click to edit Text - Double click to edit Text - Double click to edit
                    </div>

                    <div style={{width: '100%', height: '1.5px', backgroundColor: 'lightgray'}}></div>
                    <div className="comment-info">
                        <Row>
                            <Col span={4}>
                                <img src="/img/avatar.jpg" alt="avatar" width="30px" height="30px"/>
                            </Col>
                            <div className="comment">
                                <Col span={20}>
                                    <span style={{fontWeight: 'bold'}}>username</span>comment
                                </Col>
                            </div>
                        </Row>
                    </div>
                </div>
                <div style={{width: '100%', height: '80px'}}></div>
            </div>
        </>
    )
        ;
}

export default CurrentArticle;
