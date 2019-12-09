import React from 'react';

function AmityIntern(props) {
    return (
        <div>
            <p className="basicText noMargin"><b>{props.item.name}</b> is {props.item.age} years old and is from {props.item.from}.</p>
            <p className="basicText noMargin">{props.item.education} Currently teaching {props.item.teaching} during the {props.item.semester}.</p>
        </div>
    )}

export default AmityIntern;