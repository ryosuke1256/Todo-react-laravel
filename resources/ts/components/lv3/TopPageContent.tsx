import React from "react";
import { LinkButton as Button } from "../lv1/LinkButton";

const TopPageContent: React.VFC = () => {
    return (
        <>
            <div className="bg-white h-full w-screen text-center relative">
                <aside>
                    <img
                        className="absolute top-0 left-0 w-full bg-auto h-sp md:h-pc"
                        src="/images/background3.jpg"
                    />
                </aside>
                <div className="bg-white absolute top-0 left-0 w-full h-full">
                    <main className="w-full max-w-5xl inline-block pt-28 lg:pt-32">
                        <title className="w-11/12 sm:w-9/12 xl:w-full inline-block text-2xl md:text-3xl xl:text-4xl text-gray-700 font-semibold block">
                            <span className="pt-3 underLine">
                                「はぴたす」はシンプルで使いやすくを意識して
                            </span>
                            <span className="xl:inline-block sm:pt-3 underLine">
                                作成した「タスク管理ツール」です
                            </span>
                        </title>
                        <article className="flex flex-col w-full md:flex-row pt-20 sm:pt-24 md:pt-40">
                            <section className="flex-nowrap w-full bg-opacity-10">
                                <h1 className="text-yellow-800 text-xl sm:text-2xl md:text-3xl pb-5 font-medium">
                                    タスク管理して生産性を上げよう!
                                </h1>
                                <Button to="/login" className="button hover">
                                    ログイン
                                </Button>
                                <Button to="/register" className="button hover">
                                    新規登録
                                </Button>
                            </section>
                        </article>
                    </main>
                    <article className="absolute top-520 md:top-650 left-0 w-full pb-12 bg-opacity-20">
                        <div className="w-11/12 2xl:w-10/12  inline-block">
                            <title className="inline-block text-3xl text-blue-400 textShadow">
                                ABOUT.
                            </title>
                            <div className="flex flex-col lg:flex-row sm:px-12 md:px-20 lg:px-0">
                                <img
                                    className="w-full lg:w-1/2 hidden sm:inline-block pt-12"
                                    src="/images/image.png"
                                />
                                <section className="w-full lg:w-1/2 inline-block pt-6 sm:pt-12 lg:pl-6 xl:pl-8 2xl:pl-16">
                                    <div className="bg-blue-50 p-7 rounded-3xl">
                                        <h1 className="inline-block text-2xl underLineYellow">
                                            はぴたすとは？
                                        </h1>
                                        <p className="py-6 text-lg">
                                            はっぴー×タスク管理。ユーザーが今回作成したタスク管理ツール(はぴたす)を使ってハッピーになればいいなと思って名前をつけました。基本的なタスクの追加、編集、削除に加えチェックをつけて打ち消し線をつけた状態にすることもできます。
                                            一番の押しポイントはタスクに４種類のタグ（赤、青、緑、黄）のタグをつけることができるところです
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
