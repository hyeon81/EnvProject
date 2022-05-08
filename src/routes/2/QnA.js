import React, {useState} from "react";
import {Col, Row, Input} from "antd";
import {ReloadOutlined} from '@ant-design/icons';
import QnAlist from "./QnAlist";
import QnATopNav from "../../function/QnATopNav";
import WriteButton from "../../function/WriteButton";
import data from "../../json/Userdata.json"

function QnA() {
    let searchword;
    const [search, setSearch] = useState('');
    const {Search} = Input;
    const onSearch = value => {
        searchword = value;
    }


    return (
        <div className="QnA" style={{backgroundColor: 'white'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Row>
                    <Col span={23}>
                        길라잡이
                    </Col>
                </Row>
            </div>
            <QnATopNav/>
            <div className="mid-menu padding">
                <Search placeholder="검색어를 입력하세요" onSearch={onSearch} style={{width: '100%', margin: '40px 0 6px'}}/>
                <ReloadOutlined style={{margin: '12px'}}/>
                <div style={{
                    width: '100%', height: '2px', backgroundColor: 'lightgray', marginBottom: '12px'
                }}></div>

                {data[0].qna.map((item) => {
                return(<QnAlist props={item}/>)
                    })
                }
            </div>
            <WriteButton/>
        </div>
    );
}

export default QnA;