import React from 'react';

const button = (props) =>{
    return(
        <button className={'btn btn-primary'} onClick={props.clicked}>{props.children}</button>
    );
};

export default button;