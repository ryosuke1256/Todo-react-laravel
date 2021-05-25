import React from "react";
import { API } from "../../api/API";

type Props = {
    text: string;
    postTask: (postData: API) => void;
    setText: (param: string) => void;
    userID?: number;
};

const SubmitButton: React.VFC<Props> = ({
    text,
    postTask,
    setText,
    userID,
}: Props) => {
    const data: API = {
        user_id: userID,
        title: text,
        is_done: 0,
    };

    return (
        <button
            onClick={() => {
                postTask(data);
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
