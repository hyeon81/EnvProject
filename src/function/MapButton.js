import React, {useState} from "react";
import {BsFillMapFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

function MapButton() {
    const navigate = useNavigate();
    const allStyle ={
        position: 'fixed',
        bottom: '11%',
        right: '8%',
        background: 'rgba(22, 160, 133, 0.5)',
        borderRadius: '50%',
        width: '72px',
        height: '72px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
    return (
        <div className="MapButton" style={allStyle}
        onClick={()=>{navigate('/currentmap')}}>
            <BsFillMapFill style={{color: 'white', fontSize: '56px',
                padding: '8px'}}/>
        </div>
    )
}

export default MapButton;

