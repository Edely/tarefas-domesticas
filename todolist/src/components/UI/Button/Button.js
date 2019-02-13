import React from 'react';

const button = (props) =>{
    return(
        <button className={'btn'}>{props.children}</button>
    );
};

export default button;