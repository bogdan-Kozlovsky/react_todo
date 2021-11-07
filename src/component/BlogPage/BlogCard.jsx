import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import './blogPage.css';

const BlogCard = ({title, description, liked, likePost, deletePost}) => {
    const hartFill = liked ? 'red' : 'black';

    return (
        <div>
            <div className="post">
                <div className="post__inner">
                    <h2>{title}</h2>
                    <p className='post__descr'>
                        {description}
                    </p>
                    <button onClick={likePost} className={'button'}>
                        <FavoriteIcon style={{fill: hartFill}}/>
                    </button>
                </div>
                <button onClick={deletePost} className="close">
                    <CloseIcon/>
                </button>
            </div>
        </div>
    );
};


// class BlogCard extends React.Component {
//     state = {
//         likeCount: 0
//     }
//
//     // счетчик
//     likePost = () => {
//         this.setState(({likeCount}) => {
//             return {
//                 likeCount: ++likeCount
//             }
//             console.log(likeCount)
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div className="post">
//                     <h2>{this.props.title}</h2>
//                     <p style={{marginBottom: '10px'}}>
//                         {this.props.description}
//                     </p>
//
//                     {/*// счетчик*/}
//                     <span style={{padding: '10px'}}>
//                          {this.state.likeCount}
//                     </span>
//                     <button className={'button'} onClick={this.likePost}>
//                         Like
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }


export default BlogCard;