import React from "react";
import {Col, Row, Tabs, Input} from "antd";
import {AudioOutlined, ReloadOutlined} from '@ant-design/icons';

import './Tabs.css';

function QnA() {
    const {TabPane} = Tabs;
    const {Search} = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);

    return (
        <div className="QnA">
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        길라잡이
                    </Col>
                    <Col span={1} style={{marginTop: '3px'}}>
                    </Col>
                </Row>
            </div>
            <div className="card-container">
                <Tabs type="card" style={{width: '100vw'}}>
                    <TabPane tab="식생 길라잡이" key="1">
                        <div className="mid-menu">
                            <Search placeholder="input search text" onSearch={onSearch} style={{width: '100%'}}/>
                            <ReloadOutlined />
                            <div style={{width: '100%', height: '2px',
                                backgroundColor: 'lightgray'}}> </div>
                        </div>
                    </TabPane>
                    <TabPane tab="이미지 검색" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default QnA;