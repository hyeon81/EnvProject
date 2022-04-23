import React from "react";
import {ArrowLeftOutlined, DeleteFilled, EditFilled, LeftOutlined, RightOutlined,
    HeartOutlined, MessageOutlined, ShareAltOutlined} from '@ant-design/icons';
import './CurrentArticlestyle.css';

function CurrentArticle() {
    return (
        <>
            <div className="CureentArticle">
                <div className="top-nav"><ArrowLeftOutlined className="right-nav"/>
                    <div className="left-nav"><DeleteFilled /><EditFilled />
                    </div>
                </div>
                <div className="userinfo">
                    <img src="./img/avatar.jpg" alt="avatar" width="100px" height="100px"/>
                    <div className="username">
                        username
                    </div>
                </div>
                <div>습도 70% 온도 25 미세먼지 나쁨</div>

                <div className="img-slide"><LeftOutlined/>
                    <img src='./img/img1.png' alt="userImage" width="300px" height="300px"/>
                    <RightOutlined/></div>

                <div className="mid-btn"><div className="left-btn"><HeartOutlined /><MessageOutlined />
                    <ShareAltOutlined className="right-btn" /></div></div>
                <div>Textarea</div>
                <div className="comment-info">
                    <img src="./img/avatar.jpg" alt="avatar" width="50px" height="50px"/>
                    <div className="comment"><span>username</span>comment</div>
                </div>
            </div>
        </>
    )

}

export default CurrentArticle;