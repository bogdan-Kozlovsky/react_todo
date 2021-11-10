import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './addFormPost.css'

class AddFormPost extends React.Component {
    state = {
        postTitle: '',
        postDescr: ''
    }

    menagePostTitleChange = (e) => {
        this.setState({
            postTitle: e.target.value
        })
    }

    menagePostDescrChange = (e) => {
        this.setState({
            postDescr: e.target.value
        })
    }

    // создать пост
    createPost = (e) => {
        e.preventDefault();
        const post = {
            id: this.props.blogArr.length + 1,
            title: this.state.postTitle,
            description: this.state.postDescr,
            liked: false
        }
        this.props.addNewPostBlog(post);
    }



    // componentDidMount() {
    //     console.log('компонент создался')
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('Компонент обновился')
    // }
    //
    // componentWillUnmount() {
    //     console.log('компонент удалился')
    // }


    render() {
        console.log('render addForm')
        const handleFormAddClose = this.props.handleFormAddClose;
        return (
            <div className="form__post">

                <form className="form" onSubmit={this.createPost}>
                    <button className="form__close_btn">
                        <CloseIcon onClick={handleFormAddClose}/>
                    </button>
                    <h1 className="form__title">
                        Создание поста
                    </h1>
                    <input
                        value={this.state.postTitle}
                        onChange={this.menagePostTitleChange}
                        className="form__input"
                        type="text"
                        placeholder={'Заголовок поста'}
                        required
                    />
                    <textarea
                        value={this.state.postDescr}
                        onChange={this.menagePostDescrChange}
                        className="form__textarea"
                        placeholder={'Описание поста'}
                        required
                    />
                    <button className="form__btn">
                        Создать пост
                    </button>
                </form>
                <div onClick={handleFormAddClose} className="form__overlay"></div>
            </div>
        );

    }
}

export default AddFormPost;