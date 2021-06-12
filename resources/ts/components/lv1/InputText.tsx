import React from "react";
import { API } from "../../api/API";

type Props = {
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    postTask: (postData: API) => void;
    setText: (param: string) => void;
    userID?: number;
};

const InputText: React.VFC<Props> = ({
    text,
    handleChange,
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
        <input
            name="task"
            value={text}
            placeholder="タスクを入力"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    postTask(data);
                    setText("");
                }
            }}
            style={{ padding: "5px" }}
        />
    );
};

export default InputText;
