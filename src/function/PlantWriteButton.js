import React from "react";
import {IoMdCreate} from "react-icons/io";
import {useNavigate} from "react-router-dom";

function PlantWriteButton() {
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
        <div className="PlantWriteButton" style={allStyle}
        onClick={()=>{navigate('/writecollection')}}>
            <IoMdCreate style={{color: 'white', fontSize: '56px',
                padding: '8px'}}/>
        </div>
    )
}

export default PlantWriteButton;

