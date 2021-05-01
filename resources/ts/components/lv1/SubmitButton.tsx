import React from "react";

type Props = {
    text: string;
    postData: (data: { text: string }) => void;
};

const SubmitButton: React.VFC<Props> = ({ text, postData }: Props) => {
    return <button onClick={() => postData({ text })}>送信</button>;
};

export default SubmitButton;
