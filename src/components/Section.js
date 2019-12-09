import React from 'react';

function Section(props) {
    return (
        <div>
            <p className="sectionHeader">{props.header}</p>
            <p className="basicText">{props.text}</p>
        </div>
    )}

export default Section;