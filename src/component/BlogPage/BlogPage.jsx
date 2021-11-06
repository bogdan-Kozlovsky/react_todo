import React from 'react';
import './blogPage.css';
import BlogCard from "./BlogCard";

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
        showBlog: true
    }

    toggleBlog = () => {
        this.setState(({showBlog}) => {
            console.log(showBlog)
            return {
                showBlog: !showBlog
            }
        })
    }

    render() {
        console.log('render');
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
                            {this.props.posts.map(item =>
                                <BlogCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                />)}
                        </div>
                        : null
                }
            </div>
        )
    }
}


export default BlogPage;