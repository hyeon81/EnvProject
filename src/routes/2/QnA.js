import React, {useState} from "react";
import {Col, Row, Input} from "antd";
import {ReloadOutlined} from '@ant-design/icons';
import QnAlist from "./QnAlist";
import QnATopNav from "../../function/QnATopNav";
import WriteButton from "../../function/WriteButton";
import data from "../../json/Userdata.json"
import {useEffect} from "react";
import axios from "axios";

function QnA() {
    let [search, setSearch] = useState('');
    const {Search} = Input;
    const onSearch = value => {setSearch(value)}
    const [qnalist, setQnalist] = useState(null)

    useEffect(() => {
        const bodyFormData = new FormData();
        bodyFormData.append('page', '10');
        bodyFormData.append('index', '0');
        // bodyFormData.append('articleType', 'question');
        bodyFormData.append('articleType', 'article');
        bodyFormData.append('sortType', 'recent');

        axios.post('http://environment.goldenmine.kr:8080/article/feedarticles', bodyFormData)
            .then(res => {
                setQnalist(res.data)
            })
    }, [])

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
                    width: '100%', height: '1px', backgroundColor: 'lightgray', marginBottom: '12px'
                }}></div>

                {qnalist && Array.from(qnalist).filter((item) => {
                    if (search == '') {
                        return item
                    } else if (item.title.includes(search)) {
                        return item
                    }
                }).map(item => {
                    return (<QnAlist props={item} key={item.id}/>)
                })}
            </div>
            <WriteButton/>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    );
}

export default QnA;