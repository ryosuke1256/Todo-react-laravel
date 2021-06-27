import React from "react";
import { Link } from "react-router-dom";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="bg-white h-full w-full">
                <img
                    className="relative bg-cover"
                    src="/images/background.jpg"
                />
                <img
                    className="hidden"
                    src="/images/background2.jpg"
                />
                <div className="welcome">
                    <h1 className="welcome__title">
                        <div className="welcome__title--underLine">
                            Todoアプリ作ってみたよ！
                        </div>
                        <div className="welcome__title--underLine">
                            会員登録して使ってみてね！
                        </div>
                    </h1>
                    <div className="welcome__content">
                        <div>
                            <div className="welcome__content--title">
                                タスク管理ツールを使って生産性を上げよう
                            </div>
                            <Link
                                to="/login"
                                className="text-sm text-gray-700 underline welcome__content--button welcome__content--hover"
                            >
                                ログイン
                            </Link>
                            <Link
                                to="/register"
                                className="ml-4 text-sm text-gray-700 underline welcome__content--button welcome__content--hover"
                            >
                                新規登録
                            </Link>
                        </div>
                        <img
                            src="/images/todo.png"
                            width="400px"
                            height="400px"
                        />
                    </div>
                    <img
                        className="todo-image"
                        src="/images/image.png"
                        width="800px"
                    />
                    <br />
                </div>
            </div>
        </>
    );
};

export default TopPageContent;
