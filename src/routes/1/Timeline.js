import React, {useEffect, useState} from "react";
import {Col, Modal, Pagination, Row, Space} from "antd";
import {useNavigate} from "react-router-dom";
import Article from "./Article";
import {UnorderedListOutlined} from "@ant-design/icons";
import axios from "axios";

function Timeline() {
    const [obj, setObj] = useState('')
    const [sort, setSort] = useState('recent')

    useEffect(() => {
        const bodyFormData = new FormData();

        bodyFormData.append('page', '5');
        bodyFormData.append('index', '0');
        bodyFormData.append('articleType', 'article');
        bodyFormData.append('sortType', sort);

        axios.post('http://environment.goldenmine.kr:8080/article/feedarticles', bodyFormData)
            .then(res => {
                console.log(res.data)
                setObj(res.data)
            })
    }, [sort])

    // 페이지 넘버별로 가져오기
    function setPage(number, sort) {
        const bodyFormData = new FormData();

        bodyFormData.append('page', '5');
        bodyFormData.append('index', number);
        bodyFormData.append('articleType', 'article');
        bodyFormData.append('sortType', 'recent');

        axios.post('http://environment.goldenmine.kr:8080/article/feedarticles', bodyFormData).
        then(res => setObj(res.data))
    }
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

    if (!obj)
        return <>로딩중</>

    return (
        <div className="Timeline" style={{backgroundColor: 'white', height: '100%', overflowX: 'hidden'}}>
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px', marginBottom: '-12px'}}>
                <Row>
                    <Col span={23}>
                        타임라인
                    </Col>
                    <Col span={1} style={{marginTop: '2px'}}>
                        <UnorderedListOutlined style={{fontSize: '20px', fontWeight: 'bold'}} onClick={()=>{showModal()}}/>
                    </Col>
                    <Modal title="게시글 정렬" width={'300px'} footer={null} visible={isModalVisible} onOk={()=>{handleOk()}}
                           onCancel={()=>{handleCancel()}}>
                        <div style={{padding: '2%', cursor: 'pointer'}} onClick={()=>{setSort('recent')}}>최신순</div>

                        <div style={{padding: '2%', cursor: 'pointer'}} onClick={()=>{setSort('popular')}}>인기순</div>
                        <div style={{padding: '2%', cursor: 'pointer'}} onClick={()=>{setSort('random')}}>랜덤순</div>
                    </Modal>
                </Row>
            </div>
            <div className="gallery" style={{width: '100%', marginTop: '10px'}}>
                {obj.map((item) => {
                    return (<Article props={item} key={item.id}/>)
                })}
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Pagination defaultCurrent={1} total={50} onChange={function(page, sort){
                setPage(page)
            }}/>
            </div>
            <div style={{width: '100%', height: '80px'}}></div>
        </div>
    );
}

export default Timeline;