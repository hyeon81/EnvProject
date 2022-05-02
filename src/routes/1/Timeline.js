import React from "react";
import {Col, Row, Space} from "antd";
import {ArrowLeftOutlined, DeleteFilled, EditFilled, SettingFilled} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import Article from "./Article";

function Timeline() {
    const navigate = useNavigate();

    return (
        <div className="CurrentArticle" style={{backgroundColor: 'white', height: '100%'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        타임라인
                    </Col>
                    <Col span={1} style={{marginTop: '3px'}}>
                    </Col>
                </Row>
            </div>
            <Article/>
        </div>
    );
}

export default Timeline;