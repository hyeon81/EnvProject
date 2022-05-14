/*global kakao */
import React, {useEffect, useState} from "react";
import data from "../json/markerData.json";
import {Map, MapMarker, useMap} from "react-kakao-maps-sdk";

export default function Map2() {
    const [title, setTitle] = useState('이름')
    const [detail, setDetail] = useState('설명')

    const BottomStyle = {
        marginLeft: '18px', height: '100px', width: '100%',
        display: "flex", flexDirection: "column", justifyContent: 'center',
        marginBottom: '40px', textAlign: 'justify'
    }

    const data = [
        {
            content: '장미',
            detail: '쌍떡잎식물 장미목 장미과 장미속에 속하는 식물의 총칭',
            lat: 33.450705,
            lng: 126.570677
        },
        {
            content: '마라',
            detail: '쌍떡잎식물 장미목 장미과 장미속에 속하는 식물의 총칭',
            lat: 32.450705,
            lng: 126.570677
        },
    ]

    const EventMarkerContainer = ({position, content, index}) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
        return (
            <MapMarker
                position={position} // 마커를 표시할 위치
                // @ts-ignore
                onClick={(marker) => {
                    map.panTo(marker.getPosition())
                    setTitle(data[index].content)
                    setDetail(data[index].detail)
                }}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
                clickable={true}
            >
                {isVisible && content}
            </MapMarker>
        )
    }

    return (
        <>
            <Map // 지도를 표시할 Container
                center={{
                    // 지도의 중심좌표
                    lat: 33.450701,
                    lng: 126.570667,
                }}
                style={{
                    // 지도의 크기
                    width: "85vw",
                    height: "50vh",
                    margin: '1.5vh auto'
                }}
                level={3} // 지도의 확대 레벨
            >
                {data.map((value, index) => (
                    <EventMarkerContainer
                        index={index}
                        key={`EventMarkerContainer-${value.lat}-${value.lng}`}
                        position={{lat: value.lat, lng: value.lng}}
                        content={<div style={{color: "#000"}}>{value.content}</div>}
                    />
                    ))}
            </Map>
            <div className="collection-content"
                 style={{
                     padding: '4% 8%', marginTop: '6%', borderTop: 'solid 2px #1abc9c', display: 'flex',
                     position: 'fixed', bottom: 0, right: 0, left: 0
                 }}>
                <img src="/img/img1.png" alt="img"
                     width="100px" height="100px"/>
                <div style={BottomStyle}>
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>{title}</div>
                    <div>{detail}</div>
                </div>
            </div>
        </>
    )
}
