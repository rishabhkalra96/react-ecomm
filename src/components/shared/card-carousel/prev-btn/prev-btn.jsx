import React from 'react'
import './prev-btn.scss';

export default function PrevBtn(props) {
    const {className, style, onClick} = props
    const customStyles = {
        ...style, 
        display: 'flex',
        width: '50px',
        zIndex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100px',
        borderRadius: '5px',
        boxShadow: '7px 10px 14px -6px rgba(224,224,224,1)',
        }
    return (
        <div className={className}
        style={{...customStyles}}
        onClick={onClick}
        >
            
        </div>
    )
}
