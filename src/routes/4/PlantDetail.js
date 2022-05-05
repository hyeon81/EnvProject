import React, {useState} from "react";
import {Col, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";
import PlantWriteButton from "../../function/PlantWriteButton";
import {ArrowLeftOutlined} from "@ant-design/icons";

function PlantDetail() {
    const navigate = useNavigate();

    return (
        <div className="background plantdetail">
            <div className="top-nav" style={{padding: '0 6%', fontSize: '24px'}}>
                <ArrowLeftOutlined onClick={() => {
                    navigate(-1)
                }}/>
            </div>

            <div className="padding plantinfo" style={{margin: '30px auto 20px'}}>
                <div className="img">
                    <img
                        src="/img/img1.png"
                        alt="userImage"
                        width="300px"
                        height="225px"
                        style={{width: '100%', marginBottom: '12px'}}
                    />
                </div>
                <strong style={{fontSize: '20px'}}>장미</strong>
                <div className="content">
                    쌍떡잎식물 장미목 장미과 장미속에 속하는 식물의 총칭. 관목성의 화목(花木)이다. 야생종이 북반구의 한대·아한대·온대·아열대에 분포하며 약 100종 이상이 알려져 있다.
                </div>
            </div>
            <div className="collection-content"
                 style={{
                     padding: '4% 8%', borderTop: 'solid 1px lightgray', display: 'flex'
                 }}>
                <div className="img" style={{height: '90px'}}>
                    <img src="/img/img1.png" alt="img"
                         width="90px" height="90px"/>
                    <div style={{fontSize: '12px', paddingTop: '1px', color: 'gray'}}>만든 날짜</div>
                </div>
                <div className="detail-content" style={{
                    marginLeft: '16px', height: '90px',
                    display: "flex", flexDirection: "column", justifyContent: 'center'
                }}>
                    <div style={{height: '30px', lineHeight: '30px'}}><span className="label2">날짜</span>미입력</div>
                    <div style={{height: '30px', lineHeight: '30px'}}><span className="label2">장소</span>미입력</div>
                    <div style={{height: '30px', lineHeight: '30px'}}><span className="label2">계절</span>미입력</div>
                </div>
            </div>

            <PlantWriteButton/>
        </div>
    );
}

export default PlantDetail;