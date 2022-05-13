import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom"
import {Checkbox, Button, Input, Form, Select, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import '../Style.css';
import axios from 'axios';
import {useContext} from "react";
import UserInfo from "../../json/UserInfo";

function Write() {
    const info = useContext(UserInfo);
    const {TextArea} = Input;
    const element = useRef(null);
    const navigate = useNavigate();

    let [humidity, SetHumidity] = useState('');
    let [temp, SetTemp] = useState('');
    let [des, SetDes] = useState('');
    let [weather, SetWeather] = useState('');

    // getlocation
    var lat;
    var lon;

    function success(pos) {
        var crd = pos.coords;
        lat = crd.latitude;
        lon = crd.longitude;

        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
            '&appid=acc8e230eb5bb6987bcf996197066aea&units=metric').then(res => {
            SetHumidity(res.data.main.humidity)
            SetTemp(res.data.main.temp)
            SetDes(res.data.weather[0].main)
            SetWeather(res.data.weather[0].main+ ' 습도 ' +res.data.main.humidity+'% 온도 '+ res.data.main.temp + '°C')
        }).catch((err) => {
            console.log(err)
        })
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    const onFinish = (values) => {
        console.log('Success:', values);

        const bodyFormData = new FormData();
        bodyFormData.append('id', info.state.id);
        bodyFormData.append('password', info.state.pwd);
        bodyFormData.append('type', "article");
        {values.checkbox ? bodyFormData.append('weather', weather) :
            bodyFormData.append('weather', '')}
        bodyFormData.append('title', values["category"]);
        bodyFormData.append('context', values["content"]);

        console.log(weather)
        values.upload.forEach(file => bodyFormData.append('images', file.originFileObj))
        // console.log(values.upload[0].originFileObj
        axios.post('http://environment.goldenmine.kr:8080/article/writearticle', bodyFormData)
            .then(function (res) {
                console.log(res)
                if(res.data.write_succeed)
                    navigate("/currentarticle", true);
            }).catch(function (error) {
            console.log(error)
        })
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    // 체크박스 on off
    function onChangeCheckbox(e) {
        let checked = e.target.checked;
        if (checked) {
            element.current.style.display = 'block';
        } else {
            element.current.style.display = 'none';
        }
    }

    return (<div className='write' style={{width: '100vw'}}>
        <div className='toolbox'>
            도구함
        </div>
        <Form onFinish={onFinish} autoComplete="off">
            <div className="category">
                <Form.Item name="category" style={{width: 120}} rules={[{required: true, message: '카테고리를 선택하세요!'}]}>
                    <Select>
                        <Select.Option value="basic">기본</Select.Option>
                    </Select>
                </Form.Item>
                <Button className="catebtn" onClick={() => (navigate('/categorysetting'))}>설정</Button>
            </div>
            <Form.Item
                rules={[{required: true, message: '파일을 선택하세요!'}]}
                name="upload"
                label=""
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="logo" listType="picture"
                        beforeUpload={() => false}>
                    <Button icon={<UploadOutlined/>}>사진 업로드</Button>
                </Upload>
            </Form.Item>
            <div className="weatherset">
                <span className="weatherinfo" ref={element}>{weather}</span>
                <Form.Item name="checkbox" valuePropName="checked">
                    <Checkbox onChange={onChangeCheckbox}>날씨 정보 넣기</Checkbox>
                </Form.Item>
            </div>
            <Form.Item name="content" rules={[{required: true, message: '내용을 입력하세요!'}]}>
                <TextArea showCount maxLength={100} style={{height: 120}}/>
            </Form.Item>
            <Button type="primary" className="submitbtn" htmlType="submit" block>
                성장일지 등록하기
            </Button>
        </Form>
    </div>);
}

export default Write;