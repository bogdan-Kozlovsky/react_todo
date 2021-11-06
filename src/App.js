import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import BlogPage from "./component/BlogPage/BlogPage";
import Footer from "./component/Footer/Footer";
import {posts} from './shared/progectDate';


const App = () => {

    return (
        <div className={'wrapper'}>
            <Header/>
            <BlogPage posts={posts}/>


            <Footer/>
        </div>
    );
};

export default App;
