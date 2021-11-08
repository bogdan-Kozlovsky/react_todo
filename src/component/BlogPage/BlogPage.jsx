import React from 'react';
import './blogPage.css';
import BlogCard from "./BlogCard";
import {posts} from "../../shared/progectDate";
import AddFormPost from "../AddFormPost/AddFormPost";


class BlogPage extends React.Component {

    state = {
        showFormPost: false,
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


    // удаления поста
    deletePost = (index) => {
        if (window.confirm(`Удалить ${this.state.blogArr[index].title}?`)) {
            const temp = [...this.state.blogArr];
            temp.splice(index, 1);
            this.setState({
                blogArr: temp
            })
            localStorage.setItem('blogPosts', JSON.stringify(temp))
        }
    }

    // создания поста
    handleFormAddShow = () => {
        this.setState({
            showFormPost: true
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.handleFormAddShow}>
                    Создать пост
                </button>
                {this.state.showFormPost ? <AddFormPost/> : null}
                <h1>Simple Blog</h1>

                <div className="posts">
                    {this.state.blogArr.map((item, index) =>
                        <BlogCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            liked={item.liked}
                            likePost={() => this.likePost(index)}
                            deletePost={() => this.deletePost(index)}
                        />)}
                </div>
            </div>
        )
    }
}


export default BlogPage;