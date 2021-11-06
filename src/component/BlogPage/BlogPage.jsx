import React from 'react';
import './blogPage.css';

const BlogPage = ({posts}) => {


    return (
        <main>
            <h1>Simple Blog</h1>
            <div className="posts">
                {posts.map((item) => {
                    return (
                        <div className="post" key={item.id}>
                            <h2>{item.title}</h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>

            <div onClick={() => alert('Hello todo')} className="count">
                <button>Get amount of posts</button>
            </div>
        </main>
    );
};

export default BlogPage;