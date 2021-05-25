import React from "react";
import { API } from "../../api/API";

type Props = {
    text: string;
    postData: (postData: API) => void;
    setText: (param: string) => void;
    userID?: number;
};

const SubmitButton: React.VFC<Props> = ({
    text,
    postData,
    setText,
    userID,
}: Props) => {
    const data: API = {
        id: userID,
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
