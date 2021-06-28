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
                        <title className="inline-block text-2xl">
                            <span className="block sm:inline-block pt-3 underLine">
                                Todoアプリ作ってみたよ！
                            </span>
                            <span className="block sm:inline-block pt-3 underLine">
                                会員登録して使ってみてね！
                            </span>
                        </title>
                        <article className="flex flex-col sm:flex-row ">
                            <section>
                                <h1 className="text-xl pt-36 pb-5">
                                    タスク管理ツールを使って生産性を上げよう
                                </h1>
                                <Link
                                    to="/login"
                                    className="button hover"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    to="/register"
                                    className="button hover"
                                >
                                    新規登録
                                </Link>
                            </section>
                            <section className="w-full">
                                <img
                                    className="inline-block"
                                    width="400px"
                                    height="400px"
                                    src="/images/todo.png"
                                />
                            </section>
                        </article>
                        <article>
                            <img
                                className="invisible sm:visible block "
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
