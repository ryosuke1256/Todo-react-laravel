import React from "react";
import { Link } from "react-router-dom";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="bg-white h-full w-screen text-center relative">
                <aside>
                    <img
                        className="invisible lg:visible absolute top-0 left-0 bg-cover"
                        src="/images/background.jpg"
                    />
                    <img
                        className="visible lg:invisible absolute top-0 left-0 bg-cover"
                        src="/images/background2.jpg"
                    />
                </aside>
                <div className="absolute top-0 left-0 w-full h-full">
                    <main className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6-12 max-w-5xl inline-block pt-32 sm:pt-40">
                        <title className="inline-block text-2xl xl:text-3xl">
                            <span className="block sm:inline-block pt-3 underLine">
                                Todoアプリ作ってみたよ！
                            </span>
                            <span className="block sm:inline-block pt-3 underLine">
                                会員登録して使ってみてね！
                            </span>
                        </title>
                        <article className=" flex flex-col sm:flex-row ">
                            <section className="w-10/12 lg:w-8/12 xl:5/12 sm:pl-1 lg:pl-16 xl:pl-36">
                                <h1 className="text-lg sm:text-xl pt-20 sm:pt-24 lg:pt-32 pb-5">
                                    タスク管理ツールを使って生産性を上げよう
                                </h1>
                                <Link to="/login" className="button hover">
                                    ログイン
                                </Link>
                                <Link to="/register" className="button hover">
                                    新規登録
                                </Link>
                            </section>
                            <section className="w-full">
                                <img
                                    className="inline-block w-96 sm:w-80 lg:w-96"
                                    width="400px"
                                    height="400px"
                                    src="/images/todo.png"
                                />
                            </section>
                        </article>
                        <article>
                            <img
                                className="invisible sm:visible inline-block "
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
