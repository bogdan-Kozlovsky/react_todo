import React from 'react';
import './blogPage.css';
import BlogCard from "./BlogCard";
import {posts} from "../../shared/progectDate";


class BlogPage extends React.Component {

    state = {
        showBlog: true,
        blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
    }


    // лайк поста
    likePost = (index) => {
        const temp = this.state.blogArr;

        temp[index].liked = !temp[index].liked;

        this.setState({
            blogArr: temp
        })

        localStorage.setItem('blogPosts', JSON.stringify(temp))
    }

    toggleBlog = () => {
        this.setState(({showBlog}) => {
            return {
                showBlog: !showBlog
            }
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.toggleBlog}>
                    {this.state.showBlog ?
                        'Скрыть блок' :
                        'Показать блок'
                    }
                </button>
                <h1>Simple Blog</h1>
                {
                    this.state.showBlog ?
                        <div className="posts">
                            {this.state.blogArr.map((item, index) =>
                                <BlogCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    liked={item.liked}
                                    likePost={() => this.likePost(index)}
                                />)}
                        </div>
                        : null
                }
            </div>
        )
    }
}


export default BlogPage;