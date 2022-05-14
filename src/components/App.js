import React, {useEffect} from "react";
import {BrowserRouter, Redirect, Route, Navigate, Routes} from 'react-router-dom';
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
import SelectedDetail from "../routes/4/SelectedDetail";
import CategorySetting from "../routes/3/CategorySetting";
import CategoryAdd from "../routes/3/CategoryAdd";
import EditArticle from "../routes/3/EditArticle";
import SelectAddress from "../routes/4/SelectAddress";
import UserProfile from "../routes/1/UserProfile";
import {useContext} from "react";
import UserInfo from "../json/UserInfo";

function App() {
    ConfigProvider.config({
        theme: {
            primaryColor: "#1abc9c"
        }
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*{*/}
                    // isLogin ?
                    // [
                    <Route exact path="/" element={<ShowWeather/>}/>,
                    <Route exact path="/write" element={<Write/>}/>,
                    <Route exact path="/categorysetting" element={<CategorySetting/>}/>,
                    <Route exact path="/categoryadd" element={<CategoryAdd/>}/>,
                    <Route exact path="/timeline" element={<Timeline/>}/>,
                    <Route exact path="/selectedarticle/:no" element={<SelectedArticle/>}/>,
                    <Route exact path="/article" element={<Article/>}/>,
                    <Route exact path="/userprofile/:userid" element={<UserProfile/>}/>,
                    <Route exact path="/qna" element={<QnA/>}/>,
                    <Route exact path="/selectedqna/:no" element={<SelectedQnA/>}/>,
                    <Route exact path="/writeqna" element={<WriteQnA/>}/>,
                    <Route exact path="/imagesearch" element={<ImageSearch/>}/>,
                    <Route exact path="/searchresult" element={<SearchResult/>}/>,
                    <Route exact path="/collection" element={<Collection/>}/>,
                    <Route exact path="/currentMap" element={<CurrentMap/>}/>,
                    <Route exact path="/plantdetail" element={<PlantDetail/>}/>,
                    <Route exact path="/selectaddress" element={<SelectAddress/>}/>,
                    <Route exact path="/writecollection" element={<WriteCollection/>}/>,
                    <Route exact path="/selecteddetail" element={<SelectedDetail/>}/>,
                    <Route exact path="/myarticle" element={<MyArticle/>}/>,
                    <Route exact path="/currentarticle" element={<CurrentArticle/>}/>,
                    <Route exact path="/editarticle" element={<EditArticle/>}/>,
                    <Route exact path="/profileEdit" element={<ProfileEdit/>}/>,
                    <Route exact path="/Setting" element={<Setting/>}/>,
                    <Route exact path="/register" element={<Register/>}/>,
                    <Route exact path="/pwchange" element={<PWChange/>}/>,
                    <Route exact path="*" element={<Navigate to={"/"}/>}/>

                    // ] : [
                    <Route exact path="/register" element={<Register/>}/>,
                    <Route exact path="/login" element={<NormalLoginForm/>}/>,
                    <Route exact path="*" element={<Navigate to={"/login"}/>}/>
                    // ]
                    // }
                </Routes>
                <BottomNav/>
            </BrowserRouter>
        </>
    );
}

export default App;
