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

function Article() {
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
            <div className="Article" style={{backgroundColor: 'white', height: '100%'}}>
                <div className="userinfo" style={{padding: '8px 8%', backgroundColor: 'lightgray'}}>
                    <Space size={12}>
                        <Avatar size={30} src="https://joeschmoe.io/api/v1/random" icon={<UserOutlined/>}/>
                        <span className="username" style={{fontSize: '16px'}}>username</span>
                    </Space>
                </div>

                <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '20px 0 4px'}}>
                    습도 70% 온도 25 미세먼지 나쁨
                </div>

                <div className="img-slide">
                    <Row style={{textAlign: 'center', height: '50%', lineHeight: '300px'}}>
                        <Col span={2}>
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
                        </Col>
                    </Row>
                </div>

                <div className="padding">
                    <Row style={{fontSize: '24px', margin: '4px 0'}}>
                        <Col span={22}>
                            <Space size={12}>
                                <HeartOutlined/>
                                <div>
                                    <MessageOutlined/>
                                    <span
                                        className="comment-list" style={{fontSize: '12px'}}>
                                        {`댓글 ${data.length}`}
                                    </span>
                                </div>
                            </Space>
                        </Col>
                        <Col span={2}>
                            <ShareAltOutlined/>
                        </Col>
                    </Row>
                    <div className="content" style={{lineHeight: '1.5', textAlign: 'justify'}}>
                        그들의 타오르고 커다란 기쁘며, 가장 예가 황금시대다. 이성은 무한한 바이며, 인도하겠다는 아니다.
                        꽃이 창공에 끝에 있다. 봄바람을 앞이 용기가 얼마나 피가 있다.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
