import React from "react";
import { ButtonStyle } from "../../style/ButtonStyle";

type Props = {
    text: string;
    postData: (postData: {
        user_id?: number;
        title: string;
        is_done: 0 | 1;
    }) => void;
    setText: (param: string) => void;
    userID?: number;
};

type Data = {
    user_id?: number;
    title: string;
    is_done: 0 | 1;
};

const SubmitButton: React.VFC<Props> = ({
    text,
    postData,
    setText,
    userID,
}: Props) => {
    const data: Data = {
        user_id: userID,
        title: text,
        is_done: 0,
    };
    return (
        <button
            onClick={() => {
                postData(data);
                setText("");
            }}
            style={{
                border: "1px solid",
                padding: "6px",
            }}
        >
            追加
        </button>
    );
};

export default SubmitButton;
