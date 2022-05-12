import React, {useEffect, useState} from "react";
import {
    ArrowLeftOutlined, MessageOutlined, UserOutlined,
} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Col, Row, Space, Comment, List, Carousel} from "antd";
import moment from 'moment';
import CommentInput from "../../function/CommentInput";
import {useNavigate, useParams} from "react-router-dom";
import data from "../../json/Userdata.json";
import LikeButton from "../../function/LikeButton";

function SelectedArticle() {
    const navigate = useNavigate();
    const {no} = useParams()
    const [article, setArticle] = useState('')
    const [profile, setProfile] = useState('')
    const [comments, setComments] = useState('')

    const actions = [
        <span key="comment-basic-reply-to">답글</span>]

    useEffect(() => {
            const bodyFormData = new FormData();
            const bodyFormData2 = new FormData();
            const bodyFormData3 = new FormData();
            const bodyFormData4 = new FormData();
            bodyFormData.append('id', no);
            bodyFormData.append('type', 'article');

            axios.post('http://environment.goldenmine.kr:8080/article/getarticle', bodyFormData)
                .then(res => {
                    setArticle(res.data)
                    bodyFormData2.append('id', res.data.authorId);

                    res.data.commentIds.forEach(ids => {
                        bodyFormData3.append('ids', ids)
                    })
                    axios.post('http://environment.goldenmine.kr:8080/article/getcomments', bodyFormData3)
                        .then(res3 => {
                            setComments(res3.data)
                        }).then(() => {
                        Array.from(comments).forEach(object => {
                            bodyFormData4.set('id', object.authorId)
                            axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData4)
                                .then(res => {
                                    object.nickname = res.data.nickname
                                })
                        })
                    })
                })
                .then(() => {
                    axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData2)
                        .then(res2 => {
                            setProfile(res2.data)
                        })
                })
        }, [comments]
    )

    const contentStyle = {
        height: '310px', lineHeight: '310px', textAlign: 'center', margin: '0 auto',
    };

    function ImageSlide() {
        if (article.imageCount <= 0){
            return (<div><img alt="이미지가 존재하지 않습니다" style={contentStyle}/></div>)
        }
        const imagarray = [];
        for (let i = 0; i < article.imageCount; i++) {
            imagarray.push(
                <div>
                    <img src={
                        'http://environment.goldenmine.kr:8080/images/view/article-' + no + '-' + i + '.jpg'
                    } alt="userImage" style={contentStyle}/>
                </div>
            )
        }
        return imagarray
    }

    return (<>
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
                <Space size={12} onClick={() => {
                    navigate('/userprofile')
                }}>
                    <Avatar size="large"
                            src={'http://environment.goldenmine.kr:8080/images/view/' + article.authorId}
                            icon={<UserOutlined/>}/>
                    <span className="username" style={{fontSize: '16px'}}>{profile.nickname}</span>
                </Space>
            </div>

            <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '24px 0 8px'}}>
                {data[0].articleIds[0].weather}
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
                            <LikeButton/> <span style={{fontSize: '12px', marginLeft: '-20px', lineHeight: '30px'}}>
                                {`공감 ${data[0].articleIds[0].liked}`}</span>
                            <MessageOutlined/> <span style={{
                            fontSize: '12px', marginLeft: '-18px', lineHeight: '30px'
                        }}>{`댓글 ${comments.length}`}</span>
                        </Space>
                    </Col>
                    <Col span={2}>
                        {/*<ShareAltOutlined/>*/}
                    </Col>
                </Row>
                <div className="content" style={{lineHeight: '1.5', textAlign: 'justify'}}>
                    <p style={{padding: '0.5vh 0 20px'}}>{article.context}</p>
                </div>

                <div style={{width: '100%', height: '1px', backgroundColor: 'lightgray'}}> </div>
                <div className="comment" style={{marginTop: '8px'}}>
                    <List
                        className="comment-list"
                        // header={`공감 ${data[0].articleIds[0].liked}　댓글 ${comments.length}`}
                        itemLayout="horizontal"
                        dataSource={comments}
                        renderItem={item => (<li style={{padding: 0, marginBottom: -10}}>
                            <Comment
                                actions={actions}
                                author={item.nickname}
                                // avatar={'http://environment.goldenmine.kr:8080/images/view/'+item.authorId}
                                avatar={'http://environment.goldenmine.kr:8080/images/view/'+item.authorId == null ? 'http://environment.goldenmine.kr:8080/images/view/'+item.authorId
                                     : 'https://joeschmoe.io/api/v1/random' }
                                content={item.comment}
                                // datetime={item.datetime}
                            />
                        </li>)}
                    />
                </div>
                <CommentInput className="commentInput" props={no}/>
            </div>
        </div>
        <div style={{width: '100%', height: '4vh', backgroundColor:'white'}}></div>
    </>)
}
;

export default SelectedArticle;
