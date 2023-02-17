import React from 'react';

const Tags = (props) => {
    return (
        <div className="tagsList">
            <ul>
                { 
                    props.tagsList.map((text,index)=>(
                        <li key={index}>{text}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Tags;