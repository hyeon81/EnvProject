import React from "react";
import {MessageOutlined,} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Col, Row, Space, Comment, Tooltip, List} from "antd";
import moment from 'moment';
import CommentInput from "../../function/CommentInput";
import {useNavigate, useParams} from "react-router-dom";
import LikeButton from "../../function/LikeButton";
import {IoReturnUpBack} from "react-icons/io5";
import QnATopNav from "../../function/QnATopNav";
import data from "../../json/Userdata.json";

function SelectedQnA() {
    const navigate = useNavigate();
    const {no} = useParams();

    return (
        <div style={{backgroundColor: 'white'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        길라잡이
                    </Col>
                </Row>
            </div>
            <QnATopNav/>
            <div className="SelectedQnA" style={{height: '100%'}}>
                <IoReturnUpBack style={{fontSize: '24px', margin: '36px 6% 0 8%', cursor: 'pointer'}}
                                onClick={() => {
                                    navigate(-1)
                                }}/>
                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
                        </Col>
                        <Col span={20} style={{width: '100%', backgroundColor: 'lightgray'}}>
                            <img
                                src="/img/img1.png"
                                alt="userImage"
                                width="310px"
                                height="310px"
                            />
                        </Col>
                        <Col span={2}>
                        </Col>
                    </Row>
                </div>

                <div className="padding" style={{marginTop: '12px'}}>
                    <strong style={{fontSize: '16px'}}>Q. 패랭이 꽃에 물을 얼마나 주어야 하나요?</strong>
                    <div className="content" style={{lineHeight: '1.5',
                        textAlign: 'justify', marginTop: "4px"
                    }}>
                        안녕하세요. 패랭이 꽃을 4월 25일부터 키우고 있습니다. 꽃에 물을 얼마나 주어야 하는지 궁금합니다.
                    </div>
                    <Row style={{fontSize: '20px', margin: '8px 0'}}>
                        <Col span={22}>
                            <Space size={12}>
                                <LikeButton/> <span style={{fontSize: '12px', marginLeft: '-20px'}}>
                                {/*{`공감 ${data[0].articleIds[0].liked}`}</span>*/}
                                공감 0</span>
                                <MessageOutlined/> <span style={{fontSize: '12px', marginLeft: '-20px'}}>
                                {/*{`댓글 ${data[0].articleIds[0].comments.length}`}</span>*/}
                                댓글 2</span>
                            </Space>
                        </Col>
                        <Col span={2}>
                            {/*<ShareAltOutlined/>*/}
                        </Col>
                    </Row>

                    <div className="comment">
                        <List
                            className="comment-list"
                            itemLayout="horizontal"
                            header
                            dataSource={data}
                            renderItem={item => (
                                <li>
                                    <Comment
                                        actions={item.actions}
                                        author={item.author}
                                        grade={item.grade}
                                        avatar={item.avatar}
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
        </div>
    );
}

export default SelectedQnA;
