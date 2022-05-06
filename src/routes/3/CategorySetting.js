import React from "react";
import {Button, Col, Modal, Row, Space} from "antd";
import {ArrowLeftOutlined, ExclamationCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function CategorySetting() {
    const navigate = useNavigate();
    const {confirm} = Modal;

    //모달 창 띄우기
    function showConfirm() {
        confirm({
            title: '카테고리를 삭제하시겠습니까?',
            icon: <ExclamationCircleOutlined/>,
            content: '카테고리에 포함된 글이 삭제됩니다',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <>
            <div className="Setting" style={{height: '100vh', backgroundColor: 'white'}}>
                <div className="top-nav">
                    <Row style={{
                        fontSize: '20px', padding: '0 4%', backgroundColor: 'white',
                        color: 'black', borderBottom: 'solid 1px lightgray'
                    }}>
                        <Col span={22}>
                            <Space size={8}>
                                <ArrowLeftOutlined onClick={() => {
                                    navigate(-1);
                                }}/>
                                <span style={{fontSize: '16px'}}>카테고리 설정</span>
                            </Space>
                        </Col>
                        <Col span={2}>
                            <PlusOutlined onClick={()=>{navigate('/categoryadd')}}/>
                        </Col>
                    </Row>
                </div>
                <div className={"category-list"} style={{
                    display: 'flex',
                    justifyContent: 'space-between', padding: '0 6%', borderBottom: 'solid 1px lightgray'
                }}>
                    <div>기본</div>
                    {/*<div><MoreOutlined style={{fontSize: '20px'}}/></div>*/}
                    <div><span onClick={()=>{navigate('/categoryadd')}}>수정</span>
                        <span onClick={showConfirm}>삭제</span></div>
                </div>
            </div>
        </>
    )
}

export default CategorySetting;