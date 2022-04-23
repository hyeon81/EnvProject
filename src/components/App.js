import React from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Timeline from "../routes/Timeline";
import Write from "../routes/Write";
import CurrentArticle from "../routes/CurrentArticle";
import QnA from '../routes/QnA';
import Collection from "../routes/Collection";
import MyArticle from "../routes/Myarticle";
import ShowWeather from "../routes/ShowWeather";
import BottomNav from "../function/BottomNav";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ShowWeather/>}/>
                    <Route exact path="/write" element={<Write/>}/>
                    <Route exact path="/timeline" element={<Timeline/>}/>
                    <Route exact path="/qna" element={<QnA/>}/>
                    <Route exact path="/collection" element={<Collection/>}/>
                    <Route exact path="/myarticle" element={<MyArticle/>}/>
                    <Route exact path="/currentarticle" element={<CurrentArticle/>}/>
                </Routes>
                <BottomNav/>
            </BrowserRouter>
        </>
    );
}

export default App;
