import React, { useState } from "react";
import styled from "styled-components";
import InputText from "../lv1/InputText";
import SubmitButton from "../lv1/SubmitButton";

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
        <Style>
            <InputText text={text} handleChange={handleChange} />
            <SubmitButton
                text={text}
                postData={postData}
                setText={setText}
                userID={userID}
            />
        </Style>
    );
};
export default TextForm;

const Style = styled.div`
    max-width: 1300px;
    width: 85%;
    margin: 0 auto;
    padding-top: 22px;
`;
