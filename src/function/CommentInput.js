import React from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {useContext} from "react";
import UserInfo from "../json/UserInfo";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                댓글
            </Button>
        </Form.Item>
    </>
);

export default function CommentInput() {
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
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
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