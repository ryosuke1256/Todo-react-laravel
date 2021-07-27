import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import customMedia from "../../styles/customMedia";
import { InputText, SubmitButton } from "../lv1/_index";
import { TaskAPI } from "../../types/_index";

type Props = {
    postTask: (postTask: TaskAPI) => void;
    userID: number | null;
    is_bottom?: true;
};

const TextForm: React.VFC<Props> = React.memo(
    ({ postTask, userID, is_bottom }: Props) => {
        const [text, setText] = useState("");
        const inputElement = useRef<HTMLInputElement>(null);

        useEffect(() => {
            is_bottom && inputElement.current?.focus();
            // console.log(inputElement.current);
        }, []);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
                    inputElement={inputElement}
                />
                <SubmitButton
                    text={text}
                    postTask={postTask}
                    setText={setText}
                    userID={userID}
                />
            </_TextForm>
        );
    }
);
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
