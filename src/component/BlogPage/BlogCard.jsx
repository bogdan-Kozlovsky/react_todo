import React, {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './blogPage.css';

const BlogCard = ({title, description, liked, likePost}) => {
    const hartFill = liked ? 'red' : 'black';

    return (
        <div>
            <div className="post">
                <h2>{title}</h2>
                <p style={{marginBottom: '10px'}}>
                    {description}
                </p>
                <button onClick={likePost} className={'button'}>
                    <FavoriteIcon style={{fill: hartFill}}/>
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