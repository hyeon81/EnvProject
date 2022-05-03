import React, {useState} from "react";
import './BottomNavStyle.css';
import {Link} from "react-router-dom";

function BottomNav() {
    const [activeNav, setActiveNav] = useState(3);

    return (
        <>
            <nav className="wrapper">
                <div className={activeNav === 1 ? "active-nav" : "nav-item"}>
                    <Link to="/timeline" onClick={() => setActiveNav(1)}>
                        <div> 타임라인 </div>
                    </Link>
                </div>
                <div className={activeNav === 2 ? "active-nav" : "nav-item"}>
                    <Link to="/qna" onClick={() => setActiveNav(2)}>
                        <div> 길라잡이 </div>
                    </Link>
                </div>
                <div className={activeNav === 3 ? "active-nav" : "nav-item"}>
                    <Link to="/" onClick={() => setActiveNav(3)}><div>일지쓰기</div></Link>
                </div>
                <div className={activeNav === 4 ? "active-nav" : "nav-item"}>
                    <Link to="/collection" onClick={() => setActiveNav(4)}><div>공유도감</div></Link>
                </div>
                <div className={activeNav === 5 ? "active-nav" : "nav-item"}>
                    <Link to="/myarticle" onClick={() => setActiveNav(5)}><div>My일지</div></Link>
                </div>
            </nav>
        </>
    )
}

export default BottomNav;

