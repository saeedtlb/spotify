import React from 'react';

const Category = props => {
    return (
        <div>
            <h1>{props.match.params.category_id}</h1>
        </div>
    );
};

export default Category;
