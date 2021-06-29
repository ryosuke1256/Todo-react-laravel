import React, { useState } from "react";
import styled from "styled-components";
import { InputText, SubmitButton } from "../lv1/_index";
import { TaskAPI } from "../../type/api/TaskAPI";

type Props = {
    postTask: (postTask: TaskAPI) => void;
    userID?: number;
};

const TextForm: React.VFC<Props> = ({ postTask, userID }: Props) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => e.target.value);
    };

    return (
        <>
            <InputText
                text={text}
                handleChange={handleChange}
                postTask={postTask}
                setText={setText}
                userID={userID}
            />
            <SubmitButton
                text={text}
                postTask={postTask}
                setText={setText}
                userID={userID}
            />
        </>
    );
};
export default TextForm;