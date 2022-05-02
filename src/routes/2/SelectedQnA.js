import React, {useEffect, useState} from "react";
import {
    MessageOutlined,
} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Col, Row, Space, Comment, Tooltip, List} from "antd";
import moment from 'moment';
import CommentInput from "../../function/CommentInput";
import {useNavigate} from "react-router-dom";
import LikeButton from "../../function/LikeButton";
import {IoReturnUpBack} from "react-icons/io5";

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
            // actions: [<span key="comment-list-reply-to-0">답글</span>],
            author: '한솔',
            avatar: 'https://joeschmoe.io/api/v1/random',
            grade: '답변왕',
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
            // actions: [<span key="comment-list-reply-to-0">답글</span>],
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
            <div className="SelectedQnA" style={{backgroundColor: 'white', height: '100%'}}>
                <IoReturnUpBack style={{fontSize: '24px', margin: '36px 6% 0 8%', cursor: 'pointer'}}
                                onClick={()=>{navigate(-1)}}/>
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

                <div className="padding"style={{marginTop: '12px'}}>
                    <strong style={{fontSize: '16px'}}>Q. 봉숭아 물들이기 어떻게 하나요?</strong>
                    <div className="content" style={{lineHeight: '1.5', textAlign: 'justify',
                    marginTop: "4px"}}>
                        궁금합니다!
                    </div>
                    <Row style={{fontSize: '24px', margin: '12px 0 -12px'}}>
                        <Col span={22}>
                            <Space size={12}>
                                <MessageOutlined/>
                                <span style={{fontSize: '12px'}}>{`댓글 ${data.length}`}</span>
                            </Space>
                        </Col>
                        <Col span={2}>
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
                <div style={{width: '100%', height: '80px'}}> </div>
            </div>
        </>
    );
}

export default CurrentArticle;
