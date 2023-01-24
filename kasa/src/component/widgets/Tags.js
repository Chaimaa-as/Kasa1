import React from 'react';

const Tags = (props) => {
    return (
        <div>
            <ul>
                { 
                    props.tagsList.map(t=>(
                        <li>{t}</li>
                    ))
                }
                </ul>
        </div>
    );
};

export default Tags;