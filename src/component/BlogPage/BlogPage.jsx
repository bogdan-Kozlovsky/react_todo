import React from 'react';
import './blogPage.css';
import BlogCard from "./BlogCard";
import {posts} from "../../shared/progectDate";
import AddFormPost from "../AddFormPost/AddFormPost";
import axios from "axios";


class BlogPage extends React.Component {

    state = {
        showFormPost: false,
        blogArr: []
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

    handleFormAddClose = () => {
        this.setState({
            showFormPost: false
        })
    }

    addNewPostBlog = (post) => {
        this.setState((state) => {
            const posts = [...state.blogArr];
            posts.push(post);
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            return {
                blogArr: posts
            }
        })
        this.handleFormAddClose();
    }
    // создания поста


    // компонент создался
    handleEscape = (e) => {
        if (e.key === 'Escape' && this.state.showFormPost) {
            this.handleFormAddClose();
            console.log('Escape')
        }
    }

    componentDidMount() {
        axios.get('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/')
            .then((responce) => {
                this.setState({
                    blogArr: responce.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
        window.addEventListener('keyup', this.handleEscape);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEscape)
        console.log('удалился handleEscape')
    }


    render() {
        console.log('render')

        //проверка на загрузку данных
        if (this.state.blogArr.length === 0) {
            return <h1 className="db-title">Ждем данные...</h1>
        }
        return (

            <div>
                <button onClick={this.handleFormAddShow}>
                    Создать пост
                </button>
                {this.state.showFormPost ? <AddFormPost
                    addNewPostBlog={this.addNewPostBlog}
                    blogArr={this.state.blogArr}
                    handleFormAddClose={this.handleFormAddClose}/> : null}
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