import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './addFormPost.css'

const AddFormPost = ({handleFormAddClose}) => {
    return (
        <div className="form__post">

            <form className="form">
                <button className="form__close_btn">
                    <CloseIcon onClick={handleFormAddClose}/>
                </button>
                <h1 className="form__title">
                    Создание поста
                </h1>
                <input className="form__input" type="text" placeholder={'Заголовок поста'}/>
                <textarea className="form__textarea" placeholder={'Описание поста'}/>
                <button onClick={handleFormAddClose} className="form__btn" type='button'>
                    Создать пост
                </button>
            </form>
            <div onClick={handleFormAddClose} className="form__overlay"></div>
        </div>
    );
};

export default AddFormPost;