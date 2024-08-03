import React, { useState, useContext, useRef, useEffect } from "react";
import { DarkThemeToggle, Flowbite, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const navigate = useNavigate();
  const { user, setUser, setUid, count } = useContext(UserContext);

  function LogOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("Guest");
        setUid("");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <Flowbite>
      <header className="flex w-full items-center bg-white dark:bg-dark">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                  alt="logo"
                  className="dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/home">Home</ListItem>
                    <ListItem NavLink="/products">Products</ListItem>
                    <ListItem NavLink="/portfolio">Portfolio</ListItem>
                    <ListItem NavLink="/about">About</ListItem>
                    <ListItem NavLink="/blog">Blog</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <DarkThemeToggle />
                {user === "Guest" ? (
                  <>
                    <a
                      href="/signin"
                      className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                    >
                      Sign in
                    </a>
                    <a
                      href="/signup"
                      className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                    >
                      Sign Up
                    </a>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => navigate("/cart")}
                      style={{ marginInline: "25px" }}
                      disabled={count === 0}
                    >
                      <i className="bi bi-cart" style={{ marginInline: "25px" }}>
                        {count}
                      </i>
                    </Button>
                    <div className="relative inline-block">
                      <button
                        ref={trigger}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center text-left"
                      >
                        <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
                          <img
                            src="https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg"
                            alt="avatar"
                            className="h-full w-full rounded-full object-cover object-center"
                          />
                          <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
                        </div>
                        <span className="text-base font-medium text-dark dark:text-white">
                          {user.split("@")[0]}
                        </span>
                      </button>
                      <div
                        ref={dropdown}
                        onFocus={() => setDropdownOpen(true)}
                        onBlur={() => setDropdownOpen(false)}
                        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${dropdownOpen ? "block" : "hidden"}`}
                      >
                        <a
                          href="#0"
                          className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
                        >
                          Profile
                        </a>
                        <a
                          href="#0"
                          className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
                        >
                          Settings
                        </a>
                        <button
                          onClick={LogOut}
                          className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Flowbite>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};
