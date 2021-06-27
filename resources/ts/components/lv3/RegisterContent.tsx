import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterContent: React.VFC = () => {
    const [registerData, setRegisterData] = useState<any>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const [isRevealConfirmPassword, setIsRevealConfirmPassword] = useState(false); // prettier-ignore

    const onSubmit = () => {
        console.log(registerData);
        if (registerData.password_confirmation === registerData.password) {
            axios
                .post("/register", registerData)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("確認のパスワードが一致しません");
        }
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: e.target.value,
            email: registerData.email,
            password: registerData.password,
            password_confirmation: registerData.password,
        });
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: registerData.name,
            email: e.target.value,
            password: registerData.password,
            password_confirmation: registerData.password,
        });
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            name: registerData.name,
            email: registerData.email,
            password: e.target.value,
            password_confirmation: e.target.value,
        });
    };

    const handleChangeConfirmPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRegisterData({
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            password_confirmation: e.target.value,
        });
    };

    const togglePassword = (password: string) => {
        if (password === "Password") {
            setIsRevealPassword((prevState) => !prevState);
        } else if (password === "ConfirmPassword") {
            setIsRevealConfirmPassword((prevState) => !prevState);
        } else {
            return null;
        }
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 w-10/12">
                <div className="bg-white px-12 py-8 rounded shadow-md text-black w-full">
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
                    <div className="w-full">
                        <input
                            type={isRevealPassword ? "text" : "password"}
                            className="border border-grey-light w-10/12 p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChangePassword(e)}
                        />
                        <span onClick={() => togglePassword("Password")}>
                            {isRevealPassword ? (
                                <i className="far fa-eye pl-2 text-gray-600" />
                            ) : (
                                <i className="far fa-eye-slash pl-2 text-gray-600" />
                            )}
                        </span>
                    </div>
                    <div className="w-full">
                        <input
                            type={isRevealConfirmPassword ? "text" : "password"}
                            className="border border-grey-light w-10/12 p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            onChange={(e) => handleChangeConfirmPassword(e)}
                        />
                        <span onClick={() => togglePassword("ConfirmPassword")}>
                            {isRevealConfirmPassword ? (
                                <i className="far fa-eye pl-2 text-gray-600" />
                            ) : (
                                <i className="far fa-eye-slash pl-2 text-gray-600" />
                            )}
                        </span>
                    </div>
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
