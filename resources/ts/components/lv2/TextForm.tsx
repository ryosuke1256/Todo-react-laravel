import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import customMedia from "../../styles/customMedia";
import { InputText } from "../lv1/_index";
import { Button } from "../../styles/styledcomponents/BaseButtons";
import { COLOR } from "../../styles";
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

        const data: TaskAPI = {
            user_id: userID,
            title: text,
            is_done: false,
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
                <_SubmitButton
                    onClick={() => {
                        postTask(data);
                        setText("");
                    }}
                    backgroundColor={COLOR.MAIN}
                    border={COLOR.MAINBORDER}
                >
                    追加
                </_SubmitButton>
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

const _SubmitButton = styled(Button)<{
    backgroundColor: string;
    border: string;
}>`
    margin-left: 7px;
`;
