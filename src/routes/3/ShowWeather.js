import React, {useEffect, useState} from "react";
import {AiTwotoneEnvironment} from "react-icons/ai";
import {BsCloudDrizzle} from "react-icons/bs";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Weather() {
    const navigate = useNavigate();
    let [location, SetLocation] = useState('위치정보 없음');

    // getlocation
    var lat;
    var lon;

    function success(pos) {
        var crd = pos.coords;
        lat = crd.latitude;
        lon = crd.longitude;
        console.log('위도:' + lat);
        console.log('경도:' + lon);

        axios.get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=127.1086228&y=37.4012191', {
            headers: {Authorization: 'KakaoAK 043b33f1e6f5472736c45423110cdaac'},
        }).then(res => {
            location= res.data.documents[0].address_name
            SetLocation(location)
        }).catch(err => {
            console.log(err);
        });
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    return (
        <>
            <div className="padding showWeather">
                <div><AiTwotoneEnvironment/>
                    {location}
                </div>
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