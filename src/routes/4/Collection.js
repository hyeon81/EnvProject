import React, {useState} from "react";
import {Col, Input, Row} from "antd";
import {SettingFilled} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import MapButton from "../../function/MapButton";
import LeftNav from "../../function/LeftNav";

function Collection() {
    const navigate = useNavigate();
    const {Search} = Input;
    const onSearch = value => console.log(value);

    return (
        <div className="background Collection">
            <div className="top-nav" style={{
                padding: '0 6%', fontSize: '16px',
                overflow: 'hidden'
            }}>
                <Col span={23}>
                    공유도감
                </Col>
            </div>

            <div className="collection-wrapper" style={{display: 'flex', }}>
                <div className="leftnav" style={{width: '10%', height: '100%',}}>
                    <LeftNav/>
                </div>
                <div className="right-wrapper" style={{width: '90%', height: '100%',
                display: 'flex', flexDirection: 'column'}}>
                    <div className="padding">
                        <Search placeholder="검색어를 입력하세요" onSearch={onSearch}
                                style={{margin: '36px 0 12px'}}/>
                    </div>
                    <div className="collection-content"
                         onClick={() => {
                             navigate('/plantdetail')
                         }}
                         style={{
                             float: 'left', padding: '4% 8%',
                             borderBottom: 'solid 2px lightgray', display: 'flex'
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
            </div>
            <MapButton/>
        </div>
    );
}

export default Collection;