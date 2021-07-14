import React from "react";
import styled from "styled-components";
import { TaskAPI } from "../../type/_index";

type Props = {
    text: string;
    postTask: (postData: TaskAPI) => void;
    setText: (param: string) => void;
    userID: number | null;
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
        <_SubmitButton
            onClick={() => {
                postTask(data);
                setText("");
            }}
        >
            追加
        </_SubmitButton>
    );
};

export default SubmitButton;

const _SubmitButton = styled.div`
    display: inline-block;
    color: white;
    border-radius: 8px;
    padding: 6px;
    margin-left: 7px;
    background-color: #5287ec;
    border: 1px solid #4b81e6;
    opacity: 0.9;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
