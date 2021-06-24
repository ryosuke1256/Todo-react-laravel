import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterContent: React.VFC = () => {
    //name:required,string,max255
    //email:require,string,email.max255,unique:users
    //password:required,string,min8,confirmed
    const [registerData, setRegisterData] = useState<any>({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmit = () => {
        console.log(registerData);
        if (confirmPassword === registerData.password) {
            axios
                .post("/register", registerData)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("validation.confirmed");
        }
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: e.target.value,
            email: registerData.email,
            password: registerData.password,
        });
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: registerData.name,
            email: e.target.value,
            password: registerData.password,
        });
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: registerData.name,
            email: registerData.email,
            password: e.target.value,
        });
    };

    const handleChangeConfirmPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-6/12">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={(e) => handleChangeName(e)}
                    />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChangeEmail(e)}
                    />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => handleChangePassword(e)}
                    />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        onChange={(e) => handleChangeConfirmPassword(e)}
                    />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                        onClick={onSubmit}
                    >
                        Create Account
                    </button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark"
                            href="#"
                        >
                            Terms of Service
                        </a>{" "}
                        and
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <a
                        className="no-underline border-b border-blue text-blue"
                        href="../login/"
                    >
                        Log in
                    </a>
                    .
                </div>
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block align-text-top"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    <Link to="/" className="ml-1">
                        Back to your-app.com
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default RegisterContent;
