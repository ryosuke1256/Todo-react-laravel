import React from "react";
import { Link } from "react-router-dom";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="bg-white h-full w-full text-center relative">
                <aside>
                    <img
                        className="invisible sm:visible absolute top-0 left-0 bg-cover"
                        src="/images/background.jpg"
                    />
                    <img
                        className="visible sm:invisible absolute top-0 left-0 bg-cover"
                        src="/images/background2.jpg"
                    />
                </aside>
                <div className="absolute top-0 left-0 w-full h-full">
                    <main className="inline-block pt-40">
                        <title className="flex text-2xl">
                            <span className="pt-3 underLine">
                                Todoアプリ作ってみたよ！
                            </span>
                            <span className="pt-3 underLine">
                                会員登録して使ってみてね！
                            </span>
                        </title>
                        <article className="flex">
                            <section>
                                <h1 className="text-xl pt-36 pb-5">
                                    タスク管理ツールを使って生産性を上げよう
                                </h1>
                                <Link
                                    to="/login"
                                    className="button welcome__content--hover"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    to="/register"
                                    className="button welcome__content--hover"
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
            </div>
        </>
    );
};

export default TopPageContent;
