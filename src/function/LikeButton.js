import React from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';

const LikeButton = ({like, onClick}) => {
    return (
        <div>
            {like ? <HeartFilled onClick={onClick}/> : <HeartOutlined onClick={onClick}/>}
        </div>
    )
}

export default LikeButton;