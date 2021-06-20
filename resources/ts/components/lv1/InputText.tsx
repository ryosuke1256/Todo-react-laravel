import React from "react";
import { TaskAPI } from "../../type/api/TaskAPI";

type Props = {
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    postTask: (postData: TaskAPI) => void;
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
    const data: TaskAPI = {
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
            style={{ fontSize: "16px", padding: "5px" }}
        />
    );
};

export default InputText;
