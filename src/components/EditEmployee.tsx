import React from 'react';


const EditEmployee = (props: { show: boolean, onClose: any, children: any }) => {
    if (!props.show) {
        return null;
    }
    return (
        <div className="popup-backdrop">
            <div className="popup-box">
                <button className="close-btn" onClick={props.onClose}>
                    X
                </button>
                {props.children}
            </div>
        </div>
    )
}

export default EditEmployee;