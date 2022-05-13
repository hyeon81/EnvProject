import React, {useEffect, useState} from "react"
import {Comment, Avatar, Form, Button, List, Input} from 'antd';
import moment from 'moment';
import {useContext} from "react";
import UserInfo from "../json/UserInfo";
import axios from "axios";

const {TextArea} = Input;

const CommentList = ({comments}) => (
    <List
        dataSource={comments}
        // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({onChange, onSubmit, submitting, value, parentId}) => (
    <>
        <div style={parentId !== -1 ? {paddingLeft: '6vw'} : {paddingLeft: '0'}}>
        <Form.Item>
            <TextArea rows={2} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item style={{marginTop: '-12px'}}>
            <Button htmlType="submit" onClick={onSubmit} type="primary"
            style={{fontSize: '12px'}}>
                {parentId == -1 ? '댓글 추가' : '답글 추가'}
            </Button>
        </Form.Item>
        </div>
    </>
);

export default ({props, parentId}) => {
    const info = useContext(UserInfo);
    // const [profile, setProfile] = useState('');
    // console.log(parentId)
    // useEffect(() => {
    //     const bodyFormData = new FormData();
    //     bodyFormData.append('id', info.state.id);
    //     bodyFormData.append('password', info.state.pwd);
    //
    //     axios.post('http://environment.goldenmine.kr:8080/profile/getprofile', bodyFormData)
    //         .then(res2 => {
    //             setProfile(res2.data)
    //         })
    // }, [])

    const [state, setState] = React.useState({
        comments: [],
        submitting: false,
        value: '',
    });

    const handleSubmit = () => {
        if (!state.value) {
            return;
        }

        setState({
            ...state,
            submitting: true,
        });

        const bodyFormData = new FormData();
        bodyFormData.append('id', info.state.id);
        bodyFormData.append('password', info.state.pwd);
        bodyFormData.append('articleId', props)
        bodyFormData.append('parentIndex', parentId)
        bodyFormData.append('comment', state.value)
        bodyFormData.append('type', 'article')

        axios.post('http://environment.goldenmine.kr:8080/article/writecomment', bodyFormData)
            .then(res => {
                console.log(res)
            })
    };

    const handleChange = e => {
        setState({
            ...state,
            value: e.target.value,
        });
    };

    return (
        <>
            {/*{state.comments.length > 0 && <CommentList comments={state.comments}/>}*/}
            <Comment
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={state.submitting}
                        value={state.value}
                        parentId={parentId}
                    />
                }
            />
        </>
    );
};