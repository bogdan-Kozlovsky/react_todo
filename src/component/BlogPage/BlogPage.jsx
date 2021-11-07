import React from 'react';
import './blogPage.css';
import BlogCard from "./BlogCard";
import {posts} from "../../shared/progectDate";

// const BlogPage = ({posts}) => {
//
//     return (
//         <main>
//             <h1>Simple Blog</h1>
//             <div className="posts">
//                 {posts.map(item =>
//                     <BlogCard
//                         key={item.id}
//                         title={item.title}
//                         description={item.description}
//                     />)}
//             </div>
//
//         </main>
//     );
// };

class BlogPage extends React.Component {

    state = {
        showBlog: true,
        blogArr: posts
    }

    // лайк поста
    likePost = (index) => {
        const temp = this.state.blogArr;

        temp[index].liked = !temp[index].liked;

        this.setState({
            blogArr: temp
        })
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