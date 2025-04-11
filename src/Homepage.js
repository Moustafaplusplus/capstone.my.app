import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';

function Homepage() {

    useEffect(() => {
        document.title = 'Little Lemon';
      }, []);

    return (
        <>
            <Header />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </>
    );
}

export default Homepage;