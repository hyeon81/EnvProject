import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./QnATopNavStyle.css";

function QnATopNav() {
    const [activeNav, setActiveNav] = useState(1);

    return (
        <>
            <div className="wrapper2">
                <div className={activeNav === 1 ? "active-nav2" : "nav-item2"}>
                    <Link to="/qna" onClick={() => setActiveNav(1)}>
                        <div> 식생길라잡이 </div>
                    </Link>
                </div>
                <div className={activeNav === 2 ? "active-nav2" : "nav-item2"}>
                    <Link to="/qna" onClick={() => setActiveNav(2)}>
                        <div> 이미지 검색 </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default QnATopNav;

