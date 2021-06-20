import React from "react";
import { TaskAPI } from "../../type/api/TaskAPI";

type Props = {
    text: string;
    postTask: (postData: TaskAPI) => void;
    setText: (param: string) => void;
    userID?: number;
};

const SubmitButton: React.VFC<Props> = ({
    text,
    postTask,
    setText,
    userID,
}: Props) => {
    const data: TaskAPI = {
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
                padding: "7px",
            }}
        >
            追加
        </button>
    );
};

export default SubmitButton;
