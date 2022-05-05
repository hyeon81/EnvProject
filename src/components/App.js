import React from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import 'antd/dist/antd.variable.min.css';
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
import NormalLoginForm from "../routes/5/Login";
import Register from "../routes/5/Register";
import PWChange from "../routes/5/PWChange";
import SelectedArticle from "../routes/1/SelectedArticle";
import Article from "../routes/1/Article";
import SelectedQnA from "../routes/2/SelectedQnA";
import ImageSearch from "../routes/2/ImageSearch";
import SearchResult from "../routes/2/SearchResult";
import WriteQnA from "../routes/2/writeQnA";
import {ConfigProvider} from "antd";
import CurrentMap from "../routes/4/CurrentMap";
import PlantDetail from "../routes/4/PlantDetail";
import WriteCollection from "../routes/4/WriteCollection";

function App() {
    ConfigProvider.config({
        theme:{
            primaryColor:"#1abc9c"
        }
    })
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<ShowWeather/>}/>
                    <Route exact path="/write" element={<Write/>}/>
                    <Route exact path="/timeline" element={<Timeline/>}/>
                    <Route exact path="/qna" element={<QnA/>}/>
                    <Route exact path="/selectedqna" element={<SelectedQnA/>}/>
                    <Route exact path="/writeqna" element={<WriteQnA/>}/>
                    <Route exact path="/imagesearch" element={<ImageSearch/>}/>
                    <Route exact path="/searchresult" element={<SearchResult/>}/>
                    <Route exact path="/collection" element={<Collection/>}/>
                    <Route exact path="/currentMap" element={<CurrentMap/>}/>
                    <Route exact path="/plantdetail" element={<PlantDetail/>}/>
                    <Route exact path="/writecollection" element={<WriteCollection/>}/>
                    <Route exact path="/myarticle" element={<MyArticle/>}/>
                    <Route exact path="/currentarticle" element={<CurrentArticle/>}/>
                    <Route exact path="/profileEdit" element={<ProfileEdit/>}/>
                    <Route exact path="/Setting" element={<Setting/>}/>
                    <Route exact path="/login" element={<NormalLoginForm/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/pwchange" element={<PWChange/>}/>
                    <Route exact path="/selectedarticle" element={<SelectedArticle/>}/>
                    <Route exact path="/article" element={<Article/>}/>
                </Routes>
                <BottomNav/>
            </BrowserRouter>
        </>
    );
}

export default App;
