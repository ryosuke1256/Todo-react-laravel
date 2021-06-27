import React from "react";
import { Link } from "react-router-dom";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div id='wrapper' className="bg-white h-full w-full">
                <aside>
                    <img
                        className="relative bg-cover"
                        src="/images/background.jpg"
                    />
                    <img
                        className="hidden"
                        src="/images/background2.jpg"
                    />
                </aside>
                <main className="welcome">
                    <title className="welcome__title">
                        <span className="welcome__title--underLine">
                            Todoアプリ作ってみたよ！
                        </span>
                        <span className="welcome__title--underLine">
                            会員登録して使ってみてね！
                        </span>
                    </title>
                    <article className="welcome__content">
                        <section>
                            <h1 className="welcome__content--title">
                                タスク管理ツールを使って生産性を上げよう
                            </h1>
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
                        </section>
                        <section>
                            <img
                                src="/images/todo.png"
                                width="400px"
                                height="400px"
                            />
                        </section>
                    </article>
                    <article>
                        <img
                            className="todo-image"
                            src="/images/image.png"
                            width="800px"
                        />
                    </article>
                </main>
            </div>
        </>
    );
};

export default TopPageContent;
