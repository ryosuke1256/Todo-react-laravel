import React from "react";
import styled from "styled-components";
import { TaskAPI } from "../../type/_index";

type Props = {
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    postTask: (postData: TaskAPI) => void;
    setText: (param: string) => void;
    userID: number | null;
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
        <_InputText
            name="task"
            type="text"
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
        />
    );
};

export default InputText;

const _InputText = styled.input`
    font-size: 16px;
    padding: 5px;
    border: 1px solid rgba(186, 186, 186, 0.7);
`;
