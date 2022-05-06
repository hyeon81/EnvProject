import React, { useRef, useEffect } from "react";

const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
};

function Home() {
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        return () => {};
    }, []);

    return (
        <div
            className="map"
            style={{ width: "80vw", height: "80vw", margin: '0 auto' }}
            ref={container}
        ></div>
    );
}

export default Home;