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
        gap: '12px',
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
        <div className="qnalist" style={allStyle} onClick={()=>{navigate('/selectedqna')}}>
            <div className="topqna" style={topStyle}>
                <img src="/img/img1.png" alt="img"
                     width="100px" height="100px"/>
                <div style={{height: '100px'}}>
                    <p style={{fontWeight: 'bold'}}>Q. {props.title}</p>
                    <p>{props.context}</p>
                </div>
            </div>
            <div className="bottomqna" style={bottomStyle}>
                <div><MessageOutlined/> {`답변 2개`}</div>
                <div style={{color: 'gray'}}>{props.datetime}</div>
            </div>
            <div style={{
                width: '100%', height: '2px', backgroundColor: 'lightgray',
                margin: '12px 0'}}> </div>
        </div>
    )
}

export default QnAlist;