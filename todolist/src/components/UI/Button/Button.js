import React from 'react';

const button = (props) =>{
    return(
        <button className={'btn'} onClick={props.clicked}>{props.children}</button>
    );
};

export default button;