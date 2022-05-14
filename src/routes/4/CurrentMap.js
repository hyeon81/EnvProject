import React, {useState} from "react";
import {Col, Input, Row, Space} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import Map2 from "../../function/Map2";

function CurrentMap() {
    const navigate = useNavigate();
    const {Search} = Input;
    const onSearch = value => console.log(value);

    return (
        <div className="background2 CurrentMap">
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
                         onClick={() => {
                             navigate(-1)
                         }}>
                        <CloseOutlined/>
                    </Col>
                </Row>
            </div>
            <div className="padding">
                <Search placeholder="검색어를 입력하세요" onSearch={onSearch}
                        style={{width: '100%', margin: '36px 0 12px'}}/>
            </div>
            <div className="location-map" style={{textAlign: 'center'}}>
                <Map2/>
            </div>
        </div>
    );
}

export default CurrentMap;