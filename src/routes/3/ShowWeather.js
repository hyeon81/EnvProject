import React from "react";
import {AiTwotoneEnvironment} from "react-icons/ai";
import {BsCloudDrizzle} from "react-icons/bs";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Weather() {
    const navigate = useNavigate();

    // getlocation
    var lat;
    var lon;
    let location;

    function success(pos) {
        var crd = pos.coords;
        lat = crd.latitude;
        lon = crd.longitude;
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);

    console.log('위도:' + lat);
    console.log('경도:' + lon);

    axios.get(`https://dapi.kakao.com/v2/local/search/address.json?json?x= + ${lon} +'&y=' + ${lat}`, {
        headers: {Authorization: 'KakaoAK 043b33f1e6f5472736c45423110cdaac'},
    }).then(res => {
        location =res.data.documents[0];
        console.log(res);
        console.log(location);
    }).catch(err => {
        console.log(err);
    });

    return (
        <>
            <div className="padding showWeather">
                <div><AiTwotoneEnvironment/>
                    {/*{location.address.region_1depth_name}시*/}
                    {/*{location.address.region_2depth_name}구 */}
                    {/*{location.address.region_3depth_name}동*/}
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