import React, { useState } from "react";
import styled from "styled-components";
import InputText from "../lv1/InputText";
import SubmitButton from "../lv1/SubmitButton";

type Props = {
    postData: (postData: {
        user_id: number;
        title: string;
        is_done: 0 | 1;
    }) => void;
};

const TextForm: React.VFC<Props> = ({ postData }: Props) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => e.target.value);
    };

    return (
        <Style>
            <InputText text={text} handleChange={handleChange} />
            <SubmitButton text={text} postData={postData} setText={setText} />
        </Style>
    );
};
export default TextForm;

const Style = styled.div`
    width: 92%;
    margin: 0 auto;
    padding-top: 22px;
`;
