import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import MainContainer from '../main/main_container';
import Footer from '../footer/footer';

const Splash = () => {
    return (
        <div>
            <GreetingContainer />
            <MainContainer />
            <Footer />
        </div>
    );
}

export default Splash;
