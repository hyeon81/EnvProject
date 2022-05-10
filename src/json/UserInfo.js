import {createContext} from 'react';

const UserInfo=createContext({
    state:{id:'',pwd:''},
    action:{
        setId:()=>{},
        setPwd:()=>{},
    }
})

export default UserInfo;