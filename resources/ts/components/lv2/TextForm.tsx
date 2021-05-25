import React, { useState } from "react";
import styled from "styled-components";
import { InputText, SubmitButton } from "../lv1/_index";

type Props = {
    postData: (postData: {
        user_id?: number;
        title: string;
        is_done: 0 | 1;
    }) => void;
    userID?: number;
};

const TextForm: React.VFC<Props> = ({ postData, userID }: Props) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => e.target.value);
    };

    return (
        <_TextForm>
            <InputText text={text} handleChange={handleChange} />
            <SubmitButton
                text={text}
                postData={postData}
                setText={setText}
                userID={userID}
            />
        </_TextForm>
    );
};
export default TextForm;

const _TextForm = styled.div`
    max-width: 1300px;
    width: 85%;
    margin: 0 auto;
    padding-top: 105px;
`;
