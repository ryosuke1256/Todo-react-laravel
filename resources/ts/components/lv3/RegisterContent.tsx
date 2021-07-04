import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

type Props = {
    setIs_authenticated: (param: boolean) => void;
    setUserID: (param: string) => void;
    getUser: () => Promise<void>;
};

type LoginData = { email: string; password: string };

type RegisterData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

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
    const [isRevealConfirmPassword, setIsRevealConfirmPassword] = useState(false); //prettier-ignore
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<RegisterData>();

    const history = useHistory();

    const onSubmit = async (registerData): Promise<void> => {
        if (!(watch().password === watch().confirmPassword)) {
            setErrorMessage("確認のパスワードが一致しません");
        } else {
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
        }
    };

    const login = async (loginData: LoginData): Promise<void> => {
        console.log(loginData);
        await axios
            .post("/login", loginData)
            .then((res) => {
                console.log("ログインに成功しました");
                history.push("/");
                getUser();
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
            <div className="pt-20 xs:p-0 mx-auto w-11/12  md:w-full max-w-xl">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow w-full rounded-xl divide-y divide-gray-200 px-4 py-9 md:px-12 md:py-9"
                >
                    <title className="block font-bold text-center text-2xl pb-5 ">
                        サインアップ
                    </title>
                    <div className="px-5 pt-7">
                        <h1 className="font-semibold text-sm text-gray-600 pb-1 block">
                            名前
                        </h1>
                        <input
                            {...register("name", {
                                required: true,
                            })}
                            type="text"
                            placeholder="Full Name"
                            className="border rounded-lg border-grey-light px-3 py-2 mt-1 text-sm w-full  block"
                        />
                        <div className="text-gray-300 text-xs pt-1">
                            ✔︎ 1文字以上255字以下
                        </div>
                        {errors.name && errors.name.type === "required" && (
                            <p className="pt-1 text-red-400 text-xs opacity-90">
                                名前は必須です
                            </p>
                        )}
                        <h1 className="font-semibold text-sm text-gray-600 pb-1 block">
                            メールアドレス
                        </h1>
                        <input
                            {...register("email", {
                                required: true,
                                min: -2,
                                pattern: /^\S+@\S+$/i,
                            })}
                            type="text"
                            placeholder="Email"
                            className="border rounded-lg border-grey-light px-3 py-2 text-sm w-full block "
                        />
                        {errors.email && errors.email.type === "required" && (
                            <p className="pt-1 text-red-400 text-xs opacity-90">
                                メールアドレスは必須です
                            </p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <p className="pt-1 text-red-400 text-xs opacity-90">
                                メールアドレスの形式が不正です
                            </p>
                        )}
                        <div className="w-full">
                            <h1 className="font-semibold text-sm text-gray-600 pb-1 block">
                                パスワード
                            </h1>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                })}
                                placeholder="Password"
                                type={isRevealPassword ? "text" : "password"}
                                className="border border-grey-light w-10/12 px-3 py-2 mt-1 text-sm rounded-lg "
                            />
                            <span onClick={() => togglePassword("Password")}>
                                {isRevealPassword ? (
                                    <i className="far fa-eye pl-2 text-gray-600" />
                                ) : (
                                    <i className="far fa-eye-slash pl-2 text-gray-600" />
                                )}
                            </span>
                            <div className="text-gray-300 text-xs pt-1">
                                ✔︎ 8文字以上
                            </div>
                            {errors.password &&
                                errors.password.type === "required" && (
                                    <p className="pt-1 text-red-400 text-xs opacity-90">
                                        パスワードは必須です
                                    </p>
                                )}
                            {errors.password &&
                                errors.password.type === "minLength" && (
                                    <p className="pt-1 text-red-400 text-xs opacity-90">
                                        パスワードは8文字以上にしてください
                                    </p>
                                )}
                        </div>
                        <div className="w-full">
                            <h1 className="font-semibold text-sm text-gray-600 pb-1 block">
                                確認パスワード
                            </h1>
                            <input
                                {...register("confirmPassword", {
                                    required: true,
                                    minLength: 8,
                                })}
                                type={
                                    isRevealConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Confirm Password"
                                className="border border-grey-light w-10/12 px-3 py-2 text-sm rounded-lg"
                            />
                            <span
                                onClick={() =>
                                    togglePassword("ConfirmPassword")
                                }
                            >
                                {isRevealConfirmPassword ? (
                                    <i className="far fa-eye pl-2 text-gray-600" />
                                ) : (
                                    <i className="far fa-eye-slash pl-2 text-gray-600" />
                                )}
                            </span>
                            {errors.confirmPassword &&
                                errors.confirmPassword.type === "required" && (
                                    <p className="pt-1 text-red-400 text-xs opacity-90">
                                        確認のパスワードは必須です
                                    </p>
                                )}
                            {errors.confirmPassword &&
                                errors.confirmPassword.type === "minLength" && (
                                    <p className="pt-1 text-red-400 text-xs opacity-90">
                                        パスワードは8文字以上にしてください
                                    </p>
                                )}
                            <p className="pt-1 text-red-400 text-xs opacity-90">
                                {errorMessage}
                            </p>
                        </div>
                        <input
                            type="submit"
                            value="ログイン"
                            className="mt-3 transition duration-200 bg-blue-400 hover:bg-blue-300 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        />
                    </div>
                </form>
                <aside className="text-grey-dark pt-6 pb-7">
                    すでにアカウントをお持ちですか？
                    <Link
                        className="no-underline border-b border-blue text-blue"
                        to="/login"
                    >
                        ログイン
                    </Link>
                    .
                </aside>
                <aside className="w-full text-center sm:text-left whitespace-nowrap">
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
                </aside>
            </div>
            );
        </div>
    );
};

export default RegisterContent;
