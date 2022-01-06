import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AnyTime from '../AnyTime/AnyTime';
import BookSession from '../BookSession/BookSession';
import Challenge from '../Challenge/Challenge';
import Gallary from '../Gallary/Gallary';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import Products from '../Products/Products';
import ServicePoint from '../ServicePoint/ServicePoint';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <ServicePoint/>
            <BookSession/>
            <Challenge/>
            <Products/>
            <NewsLetter/>
            <AnyTime/>
            <ShowReviews/>
            <Gallary/>
            <Footer/>
        </div>
    );
};

export default Home;