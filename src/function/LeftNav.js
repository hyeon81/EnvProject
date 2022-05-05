import React, {useState} from "react";

function LeftNav() {
    const [activeNav, setActiveNav] = useState(3);

    return (
        <>
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
        </>
    )
}

export default LeftNav;

