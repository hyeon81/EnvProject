// import React, {useEffect, useRef, useState} from "react";
// import {useNavigate} from "react-router-dom"
// import {Checkbox, Button, Input, Form, Select, Upload, Image, Row, Col, Space, DatePicker} from 'antd';
// import {ArrowLeftOutlined, CloseOutlined, UploadOutlined} from '@ant-design/icons';
// import '../Style.css';
// import {SketchPicker} from 'react-color';
// import axios from 'axios';
//
// function WriteCollection() {
//     const {TextArea} = Input;
//     const navigate = useNavigate();
//     const onFinish = (values) => {
//         console.log('Success:', values);
//         navigate("/plantdetail", true);
//     }
//     const normFile = (e) => {
//         console.log('Upload event:', e);
//         if (Array.isArray(e)) {
//             return e;
//         }
//         return e && e.fileList;
//     };
//
//     function onChange(date, dateString) {
//         console.log(date, dateString);
//     }
//
//     return (
//         <div style={{backgroundColor: 'white', height: '100%', width: '100vw'}}>
//             <div className="top-nav" style={{
//                 padding: '0 6%', fontSize: '20px',
//                 backgroundColor: 'white', border: 'solid 1px lightgray'
//             }}>
//                 <Row style={{fontSize: '20px', color: 'black'}}>
//                     <Col span={21}>
//                         <Space size={10}>
//                             <ArrowLeftOutlined onClick={() => {
//                                 navigate(-1)
//                             }}/>
//                             <span style={{fontSize: '16px', fontWeight: 'bold'}}>질문 등록</span>
//                         </Space>
//                     </Col>
//                 </Row>
//             </div>
//             <div className='write'>
//                 <Form onFinish={onFinish} autoComplete="off" requiredMark={false} style={{
//                     overflow: 'hidden',
//                 }}>
//                     <Form.Item
//                         rules={[{required: true, message: '파일을 선택하세요!'}]}
//                         name="upload"
//                         label=""
//                         valuePropName="fileList"
//                         getValueFromEvent={normFile}
//                     >
//                         <Upload name="logo" listType="picture"
//                                 beforeUpload={() => false}>
//                             <Button icon={<UploadOutlined/>}>사진 업로드</Button>
//                         </Upload>
//                     </Form.Item>
//                     <div className={"input-list"}>
//                         <div className={"a-input"}>
//                             <div className="label2">종류</div>
//                             <Form.Item name="species">
//                                 <div>지정값</div>
//                             </Form.Item>
//                         </div>
//                         <Form.Item label={<label className="label2">날짜</label>} name="date"
//                                    rules={[{required: true, message: ''}]}>
//                             <DatePicker onChange={onChange}/>
//                         </Form.Item>
//                         <Form.Item label={<label className="label2">장소</label>} name="location"
//                                    rules={[{required: true, message: '',}]}>
//                             <Input/>
//                         </Form.Item>
//                         <Button>검색</Button>
//                         <Form.Item label={<label className="label2">계절</label>} name="season"
//                                    rules={[{required: true, message: ''}]}>
//                             <Select>
//                                 <Select.Option value="spring">봄</Select.Option>
//                                 <Select.Option value="summer">여름</Select.Option>
//                                 <Select.Option value="fall">가을</Select.Option>
//                                 <Select.Option value="winter">겨울</Select.Option>
//                             </Select>
//                         </Form.Item>
//                         <Form.Item label={<label className="label2">색상</label>} name="color"
//                                    rules={[{required: true, message: '',}]}>
//                             <Input/>
//                         </Form.Item>
//                         <Form.Item label={<label className="label2">별칭</label>} name="byname"
//                                    rules={[{required: true, message: '',}]}>
//                             <Input/>
//                         </Form.Item>
//                         <Form.Item label={<label className="label2">특징</label>} name="contents"
//                                    rules={[{required: true, message: '',}]}>
//                             <TextArea showCount maxLength={100} style={{height: 20}}/>
//                         </Form.Item>
//                         <Button type="primary" className="submitbtn" htmlType="submit" block
//                                 style={{marginBottom: '20%'}}>
//                             식생 길라잡이 등록
//                         </Button>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     );
// }
//
// export default WriteCollection;
