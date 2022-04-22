import React from "react";
import Select from './Select';
import {Checkbox, Button, Input} from 'antd';

function Write() {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const { TextArea } = Input;

    let style = {
        display: "inline",
        width: "50px",
        height: "640px",
        background: "orange"
    }

    return (
        <div className='Write'>
            <div className='tool' style={style}>
                도구함
            </div>
            <form>
                <Select/>
                <Button>설정</Button>
                <label htmlFor="file">이미지 변경</label>
                <input type="file" name="file" id="file" accept="image/*" style={{visibility: "hidden"}}/>
                //날씨 정보
                <Checkbox onChange={onChange}>날씨 정보 넣기</Checkbox>
                <TextArea showCount maxLength={100} style={{ height: 120 }} onChange={onChange} />
                <Button type="primary" block>
                    성장일지 등록하기
                </Button>
            </form>
        </div>
    );
}

export default Write;