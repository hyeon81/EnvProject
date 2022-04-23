import React, {useRef} from "react";
import {useNavigate} from "react-router-dom"
import Select from '../function/Select';
import {Checkbox, Button, Input} from 'antd';
import Avatar from "../function/Avatar";
import '../routes/Writestyle.css';

function Write() {
    const {TextArea} = Input;
    const element = useRef(null);
    let navigate = useNavigate();

    // 체크박스 on off
    function onChangeCheckbox(e) {
        let checked = e.target.checked;
        if (checked === true){
            element.current.style.display = 'block';
        }
        else {
            element.current.style.display = 'none';
        }
    }

    //성장일지 등록하기 버튼 누를시
    function onSubmit() {
        navigate("/currentarticle", true);
    }

    return (
        <div className='write'>
            <div className='toolbox'>
                도구함
            </div>
            <form>
                <div className="category">
                    <Select/>
                    <Button className="catebtn">설정</Button>
                </div>
                <Avatar className="avatar"/>
                {/*<div className="photoBox addPhoto">*/}
                {/*    <div className="image" style={{width: "300px", height: "300px"}}></div>*/}
                {/*    /!*이미지 업로드*!/*/}
                {/*    <input type="file" accept="image/*" style={{display: "none"}}/>*/}
                {/*</div>*/}
                <div className="weatherset">
                    <div className="weatherinfo" ref={element}>날씨아이콘 습도 70% 온도 25 미세먼지 나쁨</div>
                    <Checkbox onChange={onChangeCheckbox}>날씨 정보 넣기</Checkbox>
                </div>
                <TextArea showCount maxLength={100} style={{height: 120}}/>
                <Button type="primary" className="submitbtn" onClick={onSubmit} block>
                    성장일지 등록하기
                </Button>
            </form>
        </div>
    );
}

export default Write;