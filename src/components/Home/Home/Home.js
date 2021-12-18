import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <ShowReviews/>
        </div>
    );
};

export default Home;