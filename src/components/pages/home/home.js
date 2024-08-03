import React from 'react';
import Blog from "../blog/blogs.js"
import Contact from '../contact/contact.js';
import Carousel from '../carousel/carousel.js';
import Faqs from '../faq/faq.js';
import NewsLetter from '../newsletter/newsletter.js';
import Hero from '../hero/hero.js';
function signup() {
    return (  
        <>
        <Hero/>
        <Blog/>
        <Carousel/>
        <Contact/>
        <Faqs/>
        <NewsLetter/>
        </>
    );
}

export default signup;