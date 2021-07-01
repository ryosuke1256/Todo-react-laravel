import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

type Props = {
    setIs_authenticated: (param: boolean) => void;
    setUserID: (param: string) => void;
    getUser: () => Promise<void>;
};

type LoginData = { email: string; password: string };

const RegisterContent: React.VFC<Props> = ({
    setIs_authenticated,
    setUserID,
    getUser,
}: Props) => {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [isRevealPassword, setIsRevealPassword] = useState(false);
    const [isRevealConfirmPassword, setIsRevealConfirmPassword] = useState(false); // prettier-ignore

    const history = useHistory();

    const register = async (): Promise<void> => {
        console.log(registerData);
        if (registerData.password_confirmation === registerData.password) {
            await axios
                .post("/register", registerData)
                .then((res) => {
                    console.log(res.data.result);
                    if (res.data.result === true) {
                        console.log("ユーザ登録に成功しました");
                        login({
                            email: registerData.email,
                            password: registerData.password,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("確認のパスワードが一致しません");
        }
    };

    const login = async (loginData: LoginData): Promise<void> => {
        console.log(loginData);
        await axios
            .post("/login", loginData)
            .then((res) => {
                console.log("ログインに成功しました");
                history.push("/");
                setUserID(res.data.user.id);
                setIs_authenticated(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        title: string
    ) => {
        if (title === "name") {
            setRegisterData({ ...registerData, name: e.target.value });
        } else if (title === "email") {
            setRegisterData({ ...registerData, email: e.target.value });
        } else if (title === "password") {
            setRegisterData({ ...registerData, password: e.target.value });
        } else if (title === "confirmPassword") {
            setRegisterData({ ...registerData, password_confirmation: e.target.value }); //prettier-ignore
        } else {
            return null;
        }
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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="xs:p-0 mx-auto md:w-full md:max-w-md">
                <main className="bg-white px-12 py-8 rounded-lg shadow-md text-black w-full">
                    <h1 className="mb-8 font-bold text-2xl text-center">
                        サインアップ
                    </h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded-lg mb-4"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={(e) => handleChange(e, "name")}
                    />
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded-lg mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <div className="w-full">
                        <input
                            type={isRevealPassword ? "text" : "password"}
                            className="border border-grey-light w-10/12 p-3 rounded-lg mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e, "password")}
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
                            className="border border-grey-light w-10/12 p-3 rounded-lg mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            onChange={(e) => handleChange(e, "confirmPassword")}
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
                        className="w-full text-center py-3 rounded-lg bg-blue-400 hover:bg-blue-300 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={() => {
                            register();
                            getUser();
                        }}
                    >
                        新規登録
                    </button>
                </main>

                <div className="text-grey-dark pt-6 pb-7">
                    すでにアカウントをお持ちですか？
                    <Link
                        className="no-underline border-b border-blue text-blue"
                        to="/login"
                    >
                        ログイン
                    </Link>
                    .
                </div>
                <div className="w-full text-center sm:text-left whitespace-nowrap">
                    <Link
                        to="/"
                        className="w-10 transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                    >
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
                        戻る
                    </Link>
                </div>
            </div>
            );
        </div>
    );
};

export default RegisterContent;
