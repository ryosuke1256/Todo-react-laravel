import React, { useState } from "react";
import styled from "styled-components";
import { InputText, SubmitButton } from "../lv1/_index";
import { TaskAPI } from "../../type/api/TaskAPI";
import customMedia from "../../style/customMedia";

type Props = {
    postTask: (postTask: TaskAPI) => void;
    userID: number | null;
};

const TextForm: React.VFC<Props> = React.memo(({ postTask, userID }: Props) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => e.target.value);
    };

    return (
        <_TextForm>
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
        </_TextForm>
    );
});
export default TextForm;

const _TextForm = styled.div`
    ${customMedia.lessThan("mobile")`
        padding-left:20px;
    `}
    ${customMedia.between("mobile", "tablet")`

    `} 
    ${customMedia.greaterThan("tablet")`

    `}
`;
