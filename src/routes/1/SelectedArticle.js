import React, {useEffect, useState} from "react";
import {ArrowLeftOutlined, MessageOutlined, UserOutlined,} from "@ant-design/icons";
import "../Style.css";
import axios from "axios";
import {Avatar, Carousel, Col, Comment, List, Row, Space} from "antd";
import CommentInput from "../../function/CommentInput";
import {useNavigate, useParams} from "react-router-dom";
import data from "../../json/Userdata.json";
import LikeButton from "../../function/LikeButton";
import {useContext} from "react";
import UserInfo from "../../json/UserInfo";

function SelectedArticle() {
    const navigate = useNavigate();
    const {no} = useParams()
    const [article, setArticle] = useState('')
    const [profile, setProfile] = useState('')
    const [comments, setComments] = useState([])
    const [nicknames, setNicknames] = useState({})
    const [selectComment, setSelectComment] = useState(-1)
    const [like, setLike] = useState(false);
    const info = useContext(UserInfo);

    // async () => {
    //     const {data} = await axios.post('http://environment.goldenmine.kr:8080/article/getarticle', bodyFormData)
    //     setArticle(data)
    // }

    // useEffect(() => {
    //     axios.post('http://environment.goldenmine.kr:8080/article/getarticle', bodyFormData).then(res => {
    //         setArticle(data)
    //     })
    // })
    useEffect(() => {
        const bodyFormData4 = new FormData();

        (async () => {
            // get article
            const bodyFormDataArticle = new FormData();
            bodyFormDataArticle.append('id', no);
            bodyFormDataArticle.append('type', 'article');
            const responseArticle = await axios.post('http://environment.goldenmine.kr:8080/article/getarticle', bodyFormDataArticle)
            setArticle(responseArticle.data)

            // get profile
            const bodyFormDataProfile = new FormData();
            bodyFormDataProfile.append('id', responseArticle.data.authorId);
            const responseProfile = await axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormDataProfile)
            console.log(responseProfile.data)
            setProfile(responseProfile.data)

            console.log(responseArticle.data.commentIds)

            // get comments
            const bodyFormDataComments = new FormData();
            for(const ids of responseArticle.data.commentIds) {
                console.log(ids)
                bodyFormDataComments.append('ids', ids)
            }
            const responseComments = await axios.post('http://environment.goldenmine.kr:8080/article/getcomments', bodyFormDataComments)
            console.log(responseComments.data)
            console.log("asdfasdf")
            setComments(responseComments.data)

            const nicknames = {}
            for (const object of responseComments.data) {
                const bodyFormDataNickname = new FormData();
                bodyFormDataNickname.set('id', object.authorId)

                const response4 = await axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormDataNickname)
                nicknames[object.authorId] = response4.data["nickname"]
            }

            setNicknames(nicknames)
            // get comment author's nickname
            // let array = []
            // const promise = []
            //
            // for (const object of response3.data) {
            //     const bodyFormDataNickname = new FormData();
            //     bodyFormDataNickname.set('id', object.authorId)
            //
            //     const response4 = await axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormDataNickname)
            //     promise.push(response4.data)
            // }
            //
            // const resArray = await Promise.all(promise)
            //
            // // Array.from(res3.data).forEach((object, index) => {
            // //     bodyFormData4.set('id', object.authorId)
            // //     axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData4)
            // //         .then(res => {
            // //             array.push(res.data.nickname)
            // //         })
            // // })
            // setNickname(resArray.map(res => res.data.nickname))
            // setNickname(array)

        })()
    }, [])

    const toggleLike = () => {
        setLike(!like)
        const LikeData = new FormData();
        LikeData.append('id', info.state.id)
        LikeData.append('password', info.state.pwd)
        LikeData.append('type', 'article')
        LikeData.append('articleId', article.id)

        if (like) {
            axios.post('http://environment.goldenmine.kr:8080/article/unplus', LikeData)
                .then(res => {
                    console.log('좋아요 취소')
                    console.log(res.data)
                })
        }
        else if(!like){
            axios.post('http://environment.goldenmine.kr:8080/article/plus', LikeData)
                .then(res => {
                    console.log('좋아요')
                    console.log(res.data)
                })
        }
        // // [POST] 사용자가 좋아요를 누름 -> DB 갱신 setLike(!like)
    }

    const contentStyle = {
        height: '310px', lineHeight: '310px', textAlign: 'center', margin: '0 auto',
    };

    function ImageSlide() {
        if (article.imageCount <= 0) {
            return (<div><img alt="이미지가 존재하지 않습니다" style={contentStyle}/></div>)
        }
        const imagarray = [];
        // console.log(article.imageCount)
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

    function toggleComment(index) {
        setSelectComment(index === selectComment ? -1 : index)
        console.log(index)
        // if (index === selectComment) {
        //     setSelectComment(-1)
        // } else
        //     setSelectComment(index)
    }

    return (<>
        <div className="CurrentArticle" style={{backgroundColor: 'white', height: '100%'}}>
            <div className="top-nav">
                <Row style={{fontSize: '20px', padding: '0 6%'}}>
                    <Col span={21}>
                        <ArrowLeftOutlined onClick={() => {
                            navigate(-1)
                        }} style={{color: 'white'}}/>
                    </Col>
                </Row>
            </div>
            <div className="userinfo" style={{padding: '8px 8%', backgroundColor: 'lightgray'}}>
                <Space size={12} onClick={() => {
                    navigate('/userprofile/'+article.authorId)
                }}>
                    <Avatar size="large"
                            src={'http://environment.goldenmine.kr:8080/images/view/' + article.authorId}
                            icon={<UserOutlined/>}/>
                    <span className="username" style={{fontSize: '16px'}}>{profile.nickname}</span>
                </Space>
            </div>

            <div style={{color: 'gray', fontSize: '12px', padding: '0 8%', margin: '24px 0 8px'}}>
                {article.weather}
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
                            <LikeButton like={like} onClick={toggleLike}/> <span style={{fontSize: '12px', marginLeft: '-20px', lineHeight: '30px'}}>
                                공감 {article.plusCount}</span>
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

                <div style={{width: '100%', height: '1px', backgroundColor: 'lightgray'}}/>
                <div className="comment" style={{marginTop: '8px'}}>
                    {<List
                        className="comment-list"
                        itemLayout="horizontal"
                        dataSource={comments}
                        renderItem={(item, index) => (<li key={index} style={{padding: 0, marginBottom: -10}}>
                            <Comment style={item.inserted ? {paddingLeft: '6vh'} : {paddingLeft: '0'}}
                                     actions={item.inserted ? false : [<span onClick={() => {
                                         toggleComment(index)
                                     }}>답글</span>]}
                                     author={<span onClick={()=>{navigate('/userprofile/'+item.authorId)}}>{nicknames[index]}</span>}
                                     avatar={<Avatar
                                         src={'http://environment.goldenmine.kr:8080/images/view/' + item.authorId}
                                         alt="img" onClick={()=>{navigate('/userprofile/'+item.authorId)}}/>}
                                     content={item.comment}
                                // datetime={item.datetime}
                            />
                            {selectComment === index &&
                                <CommentInput key={index} props={no} parentId={index}/>}
                            <div>index: {index}</div>
                        </li>)}
                    />}
                </div>
                {typeof(comments) !== undefined ?
                    comments.map((item) => {
                        return (
                            <div>item.comment</div>
                        )
                    })
                    : <div></div>}
                {/*{selectComment === -1 ? <CommentInput className="commentInput" props={no} parentId={-1}/> : false}*/}
                {/*<div style={{width: '100%', height: '1px', backgroundColor: 'lightgray', margin: '4vh auto 1vh'}}></div>*/}
                <CommentInput className="commentInput" props={no} parentId={-1}/>
            </div>
        </div>
        <div style={{width: '100%', height: '6vh', backgroundColor: 'white'}}/>
    </>)
}
;

export default SelectedArticle;
