import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/auth/signup/signup.js";
import SignIn from "../pages/auth/signin/signin.js";
import Home from "../pages/home/home.js";
import Navbar from "../pages/navbar/navbar.js"
import Contact from "../pages/contact/contact.js";
import Footer from "../pages/footer/footer.js"
import Portfolio from "../pages/portfolio/portfolio.js"
import Products from "../pages/products/products.js"

import About from "../pages/about/about.js"
import Error404 from "../pages/Error/404.js"

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="Products" element={<Products />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Portfolio" element={<Portfolio />} />
                <Route path="About" element={<About />} />
                <Route path="*" element={<Error404 />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesComponent;