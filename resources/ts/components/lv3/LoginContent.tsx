import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import("../../../js/bootstrap");

type Props = {
    setIs_authenticated: (param: boolean) => void;
    setUserID: (param: string) => void;
    getUser: () => Promise<void>;
};

const LoginContent: React.VFC<Props> = ({
    setIs_authenticated,
    setUserID,
    getUser,
}: Props) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [isRevealPassword, setIsRevealPassword] = useState(false);

    const history = useHistory();

    useEffect(() => {
        initCSRF();
    }, []);

    const initCSRF = async (): Promise<void> => {
        console.log("initCSRF");
        await axios
            .get("/sanctum/csrf-cookie")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmit = async (): Promise<void> => {
        console.log(loginData);
        await axios
            .post("/login", loginData)
            .then((res) => {
                console.log(res.data.result);
                history.push("/");
                setUserID(res.data.user.id);
                setIs_authenticated(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const togglePassword = (): void => {
        setIsRevealPassword((prevState) => !prevState);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        title: string
    ) => {
        if (title === "email") {
            setLoginData({ ...loginData, email: e.target.value });
        } else if (title === "password") {
            setLoginData({ ...loginData, password: e.target.value });
        } else {
            return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="xs:p-0 mx-auto md:w-full md:max-w-md">
                <main className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 px-12 py-8">
                    <h1 className="font-bold text-center text-2xl mb-5">
                        ログイン
                    </h1>
                    <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                            メールアドレス
                        </label>
                        <input
                            placeholder="E-mail"
                            type="text"
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                            value={loginData.email}
                            onChange={(e) => handleChange(e, "email")}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    onSubmit();
                                    getUser();
                                }
                            }}
                        />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                            パスワード
                        </label>
                        <div className="w-full">
                            <input
                                placeholder="Password"
                                type={isRevealPassword ? "text" : "password"}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-11/12"
                                onChange={(e) => handleChange(e, "password")}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        onSubmit();
                                        getUser();
                                    }
                                }}
                            />
                            <span onClick={togglePassword}>
                                {isRevealPassword ? (
                                    <i className="far fa-eye pl-2 text-gray-600" />
                                ) : (
                                    <i className="far fa-eye-slash pl-2 text-gray-600" />
                                )}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="transition duration-200 bg-blue-400 hover:bg-blue-300 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            onClick={() => {
                                onSubmit();
                                getUser();
                            }}
                        >
                            <span className="inline-block mr-2">ログイン</span>
                        </button>
                    </div>
                    <div className="pt-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 pt-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
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
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">
                                        Forgot Password
                                    </span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right  whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 pt-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-bottom	"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">
                                        Help
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="pt-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap">
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
                </div>
            </div>
        </div>
    );
};

export default LoginContent;
