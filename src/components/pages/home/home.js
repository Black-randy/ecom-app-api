import React from 'react';
import Blog from "./Blogs.js"
import Contact from '../contact/contact.js';
import Carousel from '../carousel/carousel.js';
import Faqs from '../faq/faq.js';
import NewsLetter from '../newsletter/newsletter.js';
function signup() {
    return (  
        <>
        <Blog/>
        <Carousel/>
        <Contact/>
        <Faqs/>
        <NewsLetter/>
        </>
    );
}

export default signup;