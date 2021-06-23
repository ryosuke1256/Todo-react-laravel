import React from "react";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="wallpaper">
                <img
                    className="background-image"
                    src="/images/background.jpg"
                />
                <img
                    className="background-image2"
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
                            <a
                                href="{{ url('login', null , $is_production) }}"
                                className="text-sm text-gray-700 underline welcome__content--button welcome__content--hover"
                            >
                                ログイン
                            </a>
                            <a
                                href="{{ url('register', null , $is_production) }}"
                                className="ml-4 text-sm text-gray-700 underline welcome__content--button welcome__content--hover"
                            >
                                新規登録
                            </a>
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
