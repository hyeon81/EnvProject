import React, {useState} from "react";
import {Col, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";
import PlantWriteButton from "../../function/PlantWriteButton";
import {ArrowLeftOutlined} from "@ant-design/icons";

function SelectedDetail() {
    const navigate = useNavigate();

    return (
        <div className="background2 selectedDetail">
            <div className="top-nav" style={{padding: '0 6%', fontSize: '24px'}}>
                <ArrowLeftOutlined onClick={() => {
                    navigate(-1)
                }}/>
            </div>

            <div className="padding" style={{margin: '30px auto 20px',
            display: 'flex', flexDirection: 'column'}}>
                <img
                    src="/img/img1.png"
                    alt="userImage"
                    width="300vw"
                    height="240vw"
                    style={{margin: '0 auto 24px'}}
                />
                <div className="content-wrapper" style={{display: 'flex', alignItems: ''}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column', gap: '8px', margin: '0 auto'
                    }}>
                        <div><span className="label3">종류</span>가시나무</div>
                        <div><span className="label3">날짜</span>22.05.04</div>
                        <div><span className="label3">장소</span>인천광역시 중구 운서동</div>
                        <div><span className="label3">계절</span>봄</div>
                        <div><span className="label3">색상</span>짙은 갈색</div>
                        <div><span className="label3">별칭</span>나무꾼</div>
                        <div style={{lineHeight: '2'}}><span className="label3">특징</span>운서역 뒷편 공원에서 발견함. 메말라있는 상태라 물 줌</div>
                    </div>
                </div>
            </div>

            <PlantWriteButton/>
        </div>
    );
}

export default SelectedDetail;