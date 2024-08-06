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
import Blog from "../pages/blog/blogs.js";
import AdminPage from "../pages/admin/admin.js";
import AddProduct from "../pages/admin/addproducts";
import EditProduct from "../pages/admin/editproducts.js";

import Error404 from "../pages/Error/404.js"

function RoutesComponent() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="AdminPage" element={<AdminPage />} />
                <Route path="Add-Products" element={<AddProduct />} />
                <Route path="Edit-Products" element={<EditProduct />} />

                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />

                <Route path="*" element={<Error404 />} />
                
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesComponent;