import React, {useState} from "react";
import {Col, Input, Row, Space} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function CurrentMap() {
    const navigate = useNavigate();
    const {Search} = Input;
    const onSearch = value => console.log(value);

    return (
        <div className="background CurrentMap">
            <div className="top-nav" style={{
                padding: '0 6%', fontSize: '20px',
                backgroundColor: 'white', borderBottom: 'solid 1px lightgray'
            }}>
                <Row style={{fontSize: '20px', color: 'black'}}>
                    <Col span={23}>
                        <Space size={10}>
                            <span style={{fontSize: '16px'}}>현재 위치 식생 보기</span>
                        </Space>
                    </Col>
                    <Col span={1} style={{fontWeight: 'bold', fontSize: '16px'}}
                    onClick={()=>{navigate(-1)}}>
                        <CloseOutlined />
                    </Col>
                </Row>
            </div>
            <div className="padding">
                <Search placeholder="검색어를 입력하세요" onSearch={onSearch}
                        style={{width: '100%', margin: '36px 0 12px'}}/>
            </div>
            <div style={{textAlign: 'center'}}>
                지도
            </div>
            <div className="collection-content"
                 style={{
                     padding: '4% 8%', borderTop: 'solid 2px #f1c40f', display: 'flex',
                     position: "fixed", bottom: '0'
                 }}>
                <img src="/img/img1.png" alt="img"
                     width="100px" height="100px"/>
                <div style={{
                    marginLeft: '18px', height: '100px', width: '100%',
                    display: "flex", flexDirection: "column", justifyContent: 'center'
                }}>
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>장미</div>
                    <div>쌍떡잎식물 장미목 장미과 장미속에 속하는 식물의 총칭.</div>
                </div>
            </div>
        </div>
    );
}

export default CurrentMap;