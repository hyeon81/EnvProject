import React, {useEffect, useState} from "react";
import {AiTwotoneEnvironment} from "react-icons/ai";
import {BsCloudDrizzle} from "react-icons/bs";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Weather() {
    const navigate = useNavigate();
    let [location, SetLocation] = useState('');
    let [humidity, SetHumidity] = useState('');
    let [temp, SetTemp] = useState('');
    let [icon, SetIcon] = useState('');
    let [des, SetDes] = useState('');

    // getlocation
    var lat;
    var lon;

    function success(pos) {
        var crd = pos.coords;
        lat = crd.latitude;
        lon = crd.longitude;
        // console.log('위도:' + lat);
        // console.log('경도:' + lon);

        axios.all(
            [axios.get('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=' + lon + '&y=' + lat, {
                headers: {Authorization: 'KakaoAK 043b33f1e6f5472736c45423110cdaac'},
            }),
                axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
                    '&appid=acc8e230eb5bb6987bcf996197066aea&units=metric')
            ])
            .then(axios.spread((res1, res2) => {
                    SetLocation(res1.data.documents[0].address_name)
                    SetHumidity(res2.data.main.humidity)
                    SetTemp(res2.data.main.temp)
                    SetIcon('http://openweathermap.org/img/wn/' + res2.data.weather[0].icon + '@4x.png')
                    SetDes(res2.data.weather[0].main)
                })
            ).catch(err => {
            console.log(err);
        });
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    // if (!humidity)
    //     return <>로딩 중입니다</>

    return (
        <>
            <div className="padding showWeather">
                <div><AiTwotoneEnvironment/>
                    {location}
                </div>
                {icon && <img src={icon} width={"200px"} height={"200px"}/>}
                <div style={{textAlign: 'center'}}>현재 날씨
                    {
                        humidity && temp && <div style={{marginTop: '12px'}}>
                            {des} 습도 {humidity}% 온도 {temp}°C
                        </div>
                    }
                </div>
                <Button type="primary" block onClick={() => {
                    navigate('/write')
                }}>성장 일지 쓰기</Button>
            </div>
        </>
    );
}

export default Weather;