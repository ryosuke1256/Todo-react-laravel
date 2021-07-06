import React from "react";
import { Link } from "react-router-dom";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="bg-white h-full w-screen text-center relative">
                <aside>
                    <img
                        className="absolute top-0 left-0 w-full bg-auto "
                        style={{ height: "600px" }}
                        src="/images/background3.jpg"
                    />
                </aside>
                <div className="bg-white absolute top-0 left-0 w-full h-full">
                    <main className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6-12 max-w-5xl inline-block pt-24 sm:pt-28">
                        <title className="inline-block text-3xl xl:text-4xl text-gray-700 font-semibold block">
                            <span className="sm:inline-block pt-3 underLine">
                                ハピタスはシンプルで使いやすくを意識して
                            </span>
                            <span className="block sm:inline-block pt-3 underLine">
                                作成した「タスク管理ツール」です
                            </span>
                        </title>
                        <article className=" flex flex-col md:flex-row pt-36">
                            <section className="w-10/12 lg:w-8/12 xl:5/12 sm:pl-1 lg:pl-16 xl:pl-36 bg-opacity-10">
                                <h1 className="text-yellow-800 text-2xl sm:text-3xl pt-12 pb-5 font-medium">
                                    ハピタスを使って生産性を上げよう!
                                </h1>
                                <Link to="/login" className="button hover">
                                    ログイン
                                </Link>
                                <Link to="/register" className="button hover">
                                    新規登録
                                </Link>
                            </section>
                        </article>
                    </main>
                    <article className="w-full bg-opacity-20 py-32">
                        <div className="w-10/12 inline-block">
                            <title className="inline-block text-3xl text-blue-400 textShadow">
                                ABOUT.
                            </title>
                            <div className="flex flex-col lg:flex-row">
                                <img
                                    className="w-full lg:w-1/2 hidden sm:inline-block pt-12"
                                    src="/images/image3.png"
                                />
                                <section className="w-full lg:w-1/2 inline-block pt-6 sm:pt-12 sm:pl-24">
                                    <div className="bg-blue-50 p-7 rounded-3xl">
                                        <h1 className="inline-block text-2xl underLineYellow">
                                            ハピタスとは？
                                        </h1>
                                        <p className="py-6 text-lg">
                                            ハッピー×タスク管理。ユーザーが今回作成したタスク管理ツール(ハピタス)を使ってハッピーになればいいなと思って名前をつけました。基本的なタスクの追加、編集、削除に加えチェックをつけて打ち消し線をつけた状態にすることもできます。
                                            一番の押しポイントはタグに４種類の赤、青、緑、黄のタグをつけることができるところです
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default TopPageContent;
