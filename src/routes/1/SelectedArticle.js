import React, {useEffect, useState} from "react";
import {
    ArrowLeftOutlined,
    MessageOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Col, Row, Space, Comment, List, Carousel} from "antd";
import moment from 'moment';
import CommentInput from "../../function/CommentInput";
import {useNavigate} from "react-router-dom";
import data from "../../json/Userdata.json";
import LikeButton from "../../function/LikeButton";
import BottomNav from "../../function/BottomNav";

function SelectedArticle() {
    const navigate = useNavigate();
    const contentStyle = {
        height: '310px',
        lineHeight: '310px',
        textAlign: 'center',
        margin: '0 auto',
    };


    return (
        <>
            <div className="CurrentArticle" style={{backgroundColor: 'white', height: '100%'}}>
                <div className="top-nav">
                    <Row style={{fontSize: '20px', padding: '0 6%'}}>
                        <Col span={21}>
                            <ArrowLeftOutlined onClick={() => {
                                navigate('/timeline')
                            }} style={{color: 'white'}}/>
                        </Col>
                    </Row>
                </div>
                <div className="userinfo" style={{padding: '8px 8%', backgroundColor: 'lightgray'}}>
                    <Space size={12}>
                        <Avatar size="large" src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined/>}/>
                        <span className="username" style={{fontSize: '16px'}}>{data[0].username}</span>
                    </Space>
                </div>

                <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '24px 0 4px'}}>
                    {data[0].articleIds[0].weather}
                </div>

                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
                            {/*<LeftOutlined style={{fontSize: '24px', color: '#1abc9c'}}/>*/}
                        </Col>
                        <Col span={20} style={{width: '100%', backgroundColor: 'lightgray'}}>
                            <Carousel>
                                <div>
                                    <img src={data[0].articleIds[0].imageIds[0]} alt="userImage" style={contentStyle}/>
                                </div>
                                <div>
                                    <img src={data[0].articleIds[0].imageIds[1]} alt="userImage" style={contentStyle}/>
                                </div>
                                <div>
                                    <img src={data[0].articleIds[0].imageIds[2]} alt="userImage" style={contentStyle}/>
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
                                <LikeButton/> <span style={{fontSize: '12px', marginLeft: '-20px'}}>
                                {`공감 ${data[0].articleIds[0].liked}`}</span>
                                <MessageOutlined/> <span style={{
                                fontSize: '12px',
                                marginLeft: '-20px'
                            }}>{`댓글 ${data[0].articleIds[0].comments.length}`}</span>
                            </Space>
                        </Col>
                        <Col span={2}>
                            {/*<ShareAltOutlined/>*/}
                        </Col>
                    </Row>
                    <div className="content" style={{lineHeight: '1.5', textAlign: 'justify'}}>
                        <p>{data[0].articleIds[0].context}</p>
                    </div>

                    <div className="comment" style={{marginTop: '20px'}}>
                        <List
                            className="comment-list"
                            // header={`공감 ${data[0].articleIds[0].liked}　댓글 ${data[0].articleIds[0].comments.length}`}
                            itemLayout="horizontal"
                            dataSource={data[0].articleIds[0].comments}
                            renderItem={item => (
                                <li>
                                    <Comment
                                        // actions={item.actions}
                                        author={item.username}
                                        avatar={item.imageUrl}
                                        content={item.content}
                                        datetime={item.datetime}
                                    />
                                </li>
                            )}
                        />
                    </div>
                    <CommentInput className="commentInput"/>
                </div>
                <div style={{width: '100%', height: '80px'}}></div>
            </div>
        </>
    );
}

export default SelectedArticle;
