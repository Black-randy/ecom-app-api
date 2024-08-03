import React from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useState } from 'react';

const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    function SignUpWithEmail() {
        console.log("Login Function")
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                window.location.href = '/';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    function SingupWithGooglepopup() {
        console.log("Sign up with Google");
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            window.location.href = "/";
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log("error", errorMessage);
          });
      }
    return (
        <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <div className="mb-5 text-center md:mb-8">
                                <h1 className="mb-5 text-2xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    SIGN UP
                                </h1>
                            </div>
                            <form>
                                <InputBox 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                onChange={e=>setEmail(e.target.value)}
                                />
                                <InputBox
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={e=> setPassword(e.target.value)}
                                />
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Sign Up"
                                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                        onClick={SignUpWithEmail}
                                    />
                                </div>
                            </form>

                            <ul className="-mx-2 mb-12 flex justify-between">

                                <li className="w-full px-2">
                                    <a onClick={SingupWithGooglepopup}
                                        className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"

                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                            <a
                                href="/recoverpass"
                                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
                            >
                                Forget Password?
                            </a>
                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5">Not a member yet?</span>
                                <a
                                    href="/signin"
                                    className="text-primary hover:underline"
                                >
                                    Sign In
                                </a>
                            </p>

                            <div>
                                <span className="absolute right-1 top-1">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.39737"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="38.6026"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 38.6026)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="1.99122"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 1.99122)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="26.3057"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 26.3057)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.39737"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 1.39737 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.6943"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 13.6943 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="25.9911"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 25.9911 14.0086)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.288"
                                            cy="14.0086"
                                            r="1.39737"
                                            transform="rotate(-90 38.288 14.0086)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                                <span className="absolute bottom-1 left-1">
                                    <svg
                                        width="29"
                                        height="40"
                                        viewBox="0 0 29 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="2.288"
                                            cy="25.9912"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 25.9912)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="25.9911"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 25.9911)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="13.6944"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 13.6944)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="13.6943"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 13.6943)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="38.0087"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 38.0087)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="2.288"
                                            cy="1.39739"
                                            r="1.39737"
                                            transform="rotate(-90 2.288 1.39739)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="38.0089"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 38.0089)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="14.5849"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 14.5849 1.39761)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.7216"
                                            cy="1.39761"
                                            r="1.39737"
                                            transform="rotate(-90 26.7216 1.39761)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;

const InputBox = ({ type, placeholder, name }) => {
    return (
        <div className="mb-6">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
            />
        </div>
    );
};
