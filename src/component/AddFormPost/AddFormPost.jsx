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
            postTitle: e.target.event
        })
    }

    menagePostDescrChange = (e) => {
        this.setState({
            postDescr: e.target.event
        })
    }


    render() {
        const handleFormAddClose = this.props.handleFormAddClose;
        console.log(this.state)
        return (
            <div className="form__post">

                <form className="form">
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
                        placeholder={'Заголовок поста'}/>
                    <textarea
                        value={this.state.postDescr}
                        onChange={this.menagePostDescrChange}
                        className="form__textarea"
                        placeholder={'Описание поста'}/>
                    <button onClick={handleFormAddClose} className="form__btn" type='button'>
                        Создать пост
                    </button>
                </form>
                <div onClick={handleFormAddClose} className="form__overlay"></div>
            </div>
        );

    }
}

export default AddFormPost;