import React from "react";
import {MessageOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function QnAlist() {
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
                    <p style={{fontWeight: 'bold'}}>Q. 패랭이 꽃에 물을 얼마나 주어야 하나요?</p>
                    <p>안녕하세요. 패랭이 꽃을 4월 25일부터 키우고 있습니다. 현재 씨앗을 흙 속에 묻어</p>
                </div>
            </div>
            <div className="bottomqna" style={bottomStyle}>
                <div><MessageOutlined/> {`답변 2개`}</div>
                <div style={{color: 'gray'}}>1시간 전</div>
            </div>
            <div style={{
                width: '100%', height: '2px', backgroundColor: 'lightgray',
                margin: '12px 0'}}> </div>
        </div>
    )
}

export default QnAlist;