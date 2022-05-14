import React from "react";
import {MessageOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function QnAlist({props}) {
    const navigate = useNavigate();
    const allStyle = {
        background: 'white',
        padding: '6px',
        cursor: 'pointer'
    }
    const topStyle = {
        display: 'flex',
        gap: '14px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    }

    const bottomStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px'
    }

    return (
        <div className="qnalist" style={allStyle} onClick={()=>{navigate('/selectedqna/'+props.id)}}>
            <div className="topqna" style={topStyle}>
                <img src={'http://environment.goldenmine.kr:8080/images/view/article-'+props.id +'-'+'0.jpg'} alt="img"
                     width="100px" height="100px"/>
                <div style={{height: '100px'}}>
                    <p style={{fontWeight: 'bold', paddingTop: '1vh'}}>Q. {props.title}</p>
                    <p>{props.context}</p>
                </div>
            </div>
            <div className="bottomqna" style={bottomStyle}>
                <div><MessageOutlined/> {`댓글 ${props.commentIds.length}`}</div>
                <div style={{color: 'gray'}}>{props.datetime}</div>
            </div>
            <div style={{
                width: '100%', height: '1px', backgroundColor: 'lightgray',
                margin: '12px 0'}}> </div>
        </div>
    )
}

export default QnAlist;