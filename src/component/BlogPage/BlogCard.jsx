import React from 'react';
import './blogPage.css';

const BlogCard = ({title, description}) => {

    return (
        <div>
            <div className="post">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;