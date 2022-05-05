import React, {useState} from "react";
import {Col, Input, Row} from "antd";
import {SettingFilled} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import MapButton from "../../function/MapButton";

function Collection() {
    const navigate = useNavigate();
    const {Search} = Input;
    const onSearch = value => console.log(value);
    const [activeNav, setActiveNav] = useState(1);

    return (
        <div className="background Collection">
            <div className="top-nav" style={{padding: '0 6%', fontSize: '16px'}}>
                <Col span={23}>
                    공유도감
                </Col>
            </div>
            <div className="left-nav">
                <ul>
                    <li className={activeNav === 1 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(1)}>ㄱ
                    </li>
                    <li className={activeNav === 2 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(2)}>ㄴ
                    </li>
                    <li className={activeNav === 3 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(3)}>ㄷ
                    </li>
                    <li className={activeNav === 4 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(4)}>ㄹ
                    </li>
                    <li className={activeNav === 5 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(5)}>ㅁ
                    </li>
                    <li className={activeNav === 6 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(6)}>ㅂ
                    </li>
                    <li className={activeNav === 7 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(7)}>ㅅ
                    </li>
                    <li className={activeNav === 8 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(8)}>ㅇ
                    </li>
                    <li className={activeNav === 9 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(9)}>ㅈ
                    </li>
                    <li className={activeNav === 10 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(10)}>ㅊ
                    </li>
                    <li className={activeNav === 11 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(11)}>ㅋ
                    </li>
                    <li className={activeNav === 12 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(12)}>ㅌ
                    </li>
                    <li className={activeNav === 13 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(13)}>ㅍ
                    </li>
                    <li className={activeNav === 14 ? "active-nav" : "nav-item"}
                        onClick={() => setActiveNav(14)}>ㅎ
                    </li>
                </ul>
            </div>

            <div className="padding">
                <Search placeholder="검색어를 입력하세요" onSearch={onSearch}
                        style={{width: '100%', margin: '36px 0 12px'}}/>
            </div>
            <div className="collection-content"
                 onClick={()=>{navigate('/plantdetail')}}
                 style={{
                     float: 'left', padding: '4% 8% 4% 72px',
                     borderBottom: 'solid 2px lightgray', display: 'flex'
                 }}>
                <img src="/img/img1.png" alt="img"
                     width="100px" height="100px"/>
                <div style={{
                    marginLeft: '18px', height: '100px',
                    display: "flex", flexDirection: "column", justifyContent: 'center'
                }}>
                    <div style={{fontWeight: 'bold', fontSize: '16px'}}>장미</div>
                    <div>쌍떡잎식물 장미목 장미과 장미속에 속하는 식물의 총칭.</div>
                </div>
            </div>
            <MapButton/>
        </div>
    );
}

export default Collection;