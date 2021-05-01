import React from "react";

type Props = {
    text: string;
    postData: (data: {}) => void;
    setText: (param: string) => void;
};

type Data = {
    title: string;
    is_done: 0 | 1;
};

const SubmitButton: React.VFC<Props> = ({ text, postData, setText }: Props) => {
    const data: Data = {
        title: text,
        is_done: 0,
    };
    return (
        <button
            onClick={() => {
                postData(data);
                setText("");
            }}
        >
            送信
        </button>
    );
};

export default SubmitButton;
