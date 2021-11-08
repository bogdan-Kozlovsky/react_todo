import React from 'react';
import './addFormPost.css'

const AddFormPost = () => {
    return (
        <div className="form__overlay">
            <form className="form">
                <h1 className="form__title">
                    Создание поста
                </h1>
                <input className="form__input" type="text" placeholder={'Заголовок поста'}/>
                <textarea className="form__textarea" placeholder={'Описание поста'}/>
                <button className="form__btn" type='button'>
                    Создать пост
                </button>
            </form>
        </div>
    );
};

export default AddFormPost;