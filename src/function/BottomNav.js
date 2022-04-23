import React, {useState} from "react";
import './BottomNavStyle.css';
import {Link} from "react-router-dom";

function BottomNav() {
    const [activeNav, setActiveNav] = useState(3);

    return (
        <>
            <nav className="wrapper">
                <div className={activeNav === 1 ? "active-nav" : "nav-item"}>
                    <Link to="/timeline" onClick={() => setActiveNav(1)}>타임라인</Link>
                </div>
                <div className={activeNav === 2 ? "active-nav" : "nav-item"}>
                    <Link to="/qna" onClick={() => setActiveNav(2)}>지식인</Link>
                </div>
                <div className={activeNav === 3 ? "active-nav" : "nav-item"}>
                    <Link to="/write" onClick={() => setActiveNav(3)}>일지쓰기</Link>
                </div>
                <div className={activeNav === 4 ? "active-nav" : "nav-item"}>
                    <Link to="/collection" onClick={() => setActiveNav(4)}>공유도감</Link>
                </div>
                <div className={activeNav === 5 ? "active-nav" : "nav-item"}>
                    <Link to="/myarticle" onClick={() => setActiveNav(5)}>My일지</Link>
                </div>
            </nav>
        </>
    )
}

export default BottomNav;

