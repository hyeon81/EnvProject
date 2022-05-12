import React from "react"
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {useContext} from "react";
import UserInfo from "../json/UserInfo";
import axios from "axios";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        // header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={2} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                댓글 추가
            </Button>
        </Form.Item>
    </>
);

export default ({props}) => {
    const info = useContext(UserInfo);

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

        setTimeout(() => {
            setState({
                submitting: false,
                value: '',
                comments: [
                    ...state.comments,
                    {
                        author: 'Han Solo',
                        avatar: 'https://joeschmoe.io/api/v1/random',
                        content: <p>{state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                ],
            });
            const bodyFormData = new FormData();
            bodyFormData.append('id', info.state.id);
            bodyFormData.append('password', info.state.pwd);
            // bodyFormData.append()

            axios.post('http://environment.goldenmine.kr:8080/article/getarticle', bodyFormData)
                .then(res => {
                })
        }, 1000);
    };

    const handleChange = e => {
        setState({
            ...state,
            value: e.target.value,
        });
    };

    return (
        <>
            {state.comments.length > 0 && <CommentList comments={state.comments} />}
            <Comment
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={state.submitting}
                        value={state.value}
                    />
                }
            />
        </>
    );
};