import React from 'react';

const validation = (props) => {
    const minimumTextLength = 5;
    let message = "Text too short!";

    if (props.inputLength >= minimumTextLength)
    {
        message = "Text long enough!";
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default validation;