/*global kakao */
import React, {useEffect, useState} from "react"
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {Button, Col, Input, Row, Space} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

export default function SelectAddress() {
    const navigate = useNavigate();
    const [position, setPosition] = useState()
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
    const [search, setSearch] = useState('');
    const {Search} = Input;
    const onSearch = value => {
        setSearch(value)
    }
    console.log(search)

    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(search, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds()
                let markers = []

                for (var i = 0; i < data.length; i++) {
                    // @ts-ignore
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        content: data[i].place_name,
                    })
                    // @ts-ignore
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds)
            }
        })
    }, [search])

    return (
        <div className="background2 CurrentMap">
            <div className="top-nav" style={{
                padding: '0 6%', fontSize: '20px',
                backgroundColor: 'white', borderBottom: 'solid 1px lightgray'
            }}>
                <Row style={{fontSize: '20px', color: 'black'}}>
                    <Col span={23}>
                        <Space size={10}>
                            <span style={{fontSize: '16px'}}>주소 검색</span>
                        </Space>
                    </Col>
                    <Col span={1} style={{fontWeight: 'bold', fontSize: '16px'}}
                         onClick={() => {
                             navigate(-1)
                         }}>
                        <CloseOutlined/>
                    </Col>
                </Row>
            </div>
            <div className="padding">
                <Search placeholder="검색어를 입력하세요" onSearch={onSearch}
                        style={{width: '100%', margin: '36px 0 12px'}}/>
            </div>
            <Map // 로드뷰를 표시할 Container
                center={{
                    lat: 37.566826,
                    lng: 126.9786567,
                }}
                style={{
                    width: "100%",
                    height: "350px",
                }}
                level={2}
                onCreate={setMap}
                onClick={(_t, mouseEvent) => setPosition({
                    lat: mouseEvent.latLng.getLat(),
                    lng: mouseEvent.latLng.getLng(),
                })}
            >
                {position && <MapMarker position={position}/>}
            </Map>
            {/*{position && <p>{'클릭한 위치의 위도는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>}*/}
            <div style={{padding: '0 8%'}}>
                <Button type="primary" htmlType="submit" block
                        style={{marginBottom: '20%', marginTop: '36px', width: '100%',}}>
                    이 위치로 등록
                </Button>
            </div>
        </div>
    )
}
