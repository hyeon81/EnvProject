import React from "react";
import {Col, Row, Space} from "antd";
import {useNavigate} from "react-router-dom";
import Article from "./Article";
import data from "../../json/Userdata.json"
function Timeline() {
    const navigate = useNavigate();

    return (
        <div className="Timeline" style={{backgroundColor: 'white', height: '100%'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px', marginBottom: '-12px'}}>
                <Row>
                    <Col span={23}>
                        타임라인
                    </Col>
                    <Col span={1} style={{marginTop: '3px'}}>
                    </Col>
                </Row>
            </div>
            <div className="gallery" style={{width: '100%', marginTop: '10px'}}>
                {data[0].articleIds.map((item) => {
                    return (<Article props={item}/>)
                })}
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    );
}

export default Timeline;