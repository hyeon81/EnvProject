import React from "react";
import {AiTwotoneEnvironment} from "react-icons/ai";
import {BsCloudDrizzle} from "react-icons/bs";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude + ' ' + position.coords.longitude);
        }, function(error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS를 지원하지 않습니다');
    }
}

function Weather() {
    const navigate = useNavigate();
    getLocation();
    return (
        <>
            <div className="padding showWeather">
                <div><AiTwotoneEnvironment/> 현재 위치</div>
                <div><BsCloudDrizzle style={{fontSize: '100px'}}/></div>
                <div style={{textAlign: 'center'}}>현재 날씨
                    <div style={{marginTop: '12px'}}>습도 70% 온도 25도 미세먼지 나쁨</div></div>
                <Button type="primary" block onClick={() => {
                    navigate('/write')
                }}>성장 일지 쓰기</Button>
            </div>
        </>
    );
}

export default Weather;