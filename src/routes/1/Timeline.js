import React, {useState} from "react";
import {Col, Modal, Row, Space} from "antd";
import {useNavigate} from "react-router-dom";
import Article from "./Article";
import data from "../../json/Userdata.json"
import {UnorderedListOutlined} from "@ant-design/icons";

function Timeline() {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="Timeline" style={{backgroundColor: 'white', height: '100%', overflowX:'hidden'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px', marginBottom: '-12px'}}>
                <Row>
                    <Col span={23}>
                        타임라인
                    </Col>
                    <Col span={1} style={{marginTop: '2px'}}>
                        <UnorderedListOutlined style={{fontSize: '20px', fontWeight: 'bold'}} onClick={showModal}/>
                    </Col>
                    <Modal title="게시글 정렬" width={'300px'} footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div style={{padding: '2%', cursor: 'pointer'}}>최신순</div>
                        <div style={{padding: '2%', cursor: 'pointer'}}>인기순</div>
                    </Modal>
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