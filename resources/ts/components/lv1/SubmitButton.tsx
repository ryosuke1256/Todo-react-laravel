import React from "react";

type Props = {
    text: string;
    postData: (data) => void;
};

type Data = {
    title: string;
    is_done: 0 | 1;
};

const SubmitButton: React.VFC<Props> = ({ text, postData }: Props) => {
    const data: Data = {
        title: text,
        is_done: 0,
    };
    return <button onClick={() => postData(data)}>送信</button>;
};

export default SubmitButton;
