import React from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Timeline from "../routes/1/Timeline";
import Write from "../routes/3/Write";
import CurrentArticle from "../routes/5/CurrentArticle";
import QnA from '../routes/2/QnA';
import Collection from "../routes/4/Collection";
import MyArticle from "../routes/5/Myarticle";
import ShowWeather from "../routes/3/ShowWeather";
import BottomNav from "../function/BottomNav";
import ProfileEdit from "../routes/5/ProfileEdit";
import Setting from "../routes/5/Setting";
import MyInfo from "../routes/5/MyInfo";
import NormalLoginForm from "../routes/5/NormalLoginForm";
import Register from "../routes/5/Register";

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
                    <Route exact path="/profileEdit" element={<ProfileEdit/>}/>
                    <Route exact path="/Setting" element={<Setting/>}/>
                    <Route exact path="/myinfo" element={<MyInfo/>}/>
                    <Route exact path="/login" element={<NormalLoginForm/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                </Routes>
                <BottomNav/>
            </BrowserRouter>
        </>
    );
}

export default App;
