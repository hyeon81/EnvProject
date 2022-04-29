import React, {useEffect, useState} from "react";
import {
    ArrowLeftOutlined,
    DeleteFilled,
    EditFilled,
    LeftOutlined,
    RightOutlined,
    HeartOutlined,
    MessageOutlined,
    ShareAltOutlined, UserOutlined,
} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Col, Row, Space, Comment, Tooltip, List} from "antd";
import moment from 'moment';
import CommentInput from "../../function/CommentInput";
import {useNavigate} from "react-router-dom";

function CurrentArticle() {
    //웹에서 서버 요청
    // const [article, setArticle] = useState([]);
    // const getArticle = () => {
    //     axios.get("url").then((res) => setArticle(res.data));
    // };
    // useEffect(getArticle, []);

    const navigate = useNavigate();
    //댓글 보여주기
    const data = [
        {
            actions: [<span key="comment-list-reply-to-0">답글</span>],
            author: '한솔',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">답글</span>],
            author: '한솔',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];

    return (
        <>
            <div className="CurrentArticle" style={{backgroundColor: 'white', height: '100%'}}>
                <div className="top-nav">
                    <Row style={{fontSize: '20px', padding: '0 6%'}}>
                        <Col span={21}>
                            <ArrowLeftOutlined onClick={()=>{navigate('/myarticle')}} style={{color: 'white'}}/>
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
                        <Avatar size="large" src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined/>}/>
                        <span className="username" style={{fontSize: '16px'}}>username</span>
                    </Space>
                </div>

                <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '24px 0 4px'}}>
                    습도 70% 온도 25 미세먼지 나쁨
                </div>

                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
                            <LeftOutlined style={{fontSize: '24px', color: '#1abc9c'}}/>
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
                            <RightOutlined style={{fontSize: '24px', color: '#1abc9c'}}/>
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
                        <Col span={2}>
                            <ShareAltOutlined style={{float: 'right'}}/>
                        </Col>
                    </Row>
                    <div className="content" style={{lineHeight: '1.3'}}>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </div>

                    <div className="comment-info">
                        <List
                            className="comment-list"
                            header={`댓글 ${data.length}`}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <li>
                                    <Comment
                                        actions={item.actions}
                                        author={item.author}
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
        </>
    );
}

export default CurrentArticle;
