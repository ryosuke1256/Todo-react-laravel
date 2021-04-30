import React from "react";
import styled from "styled-components";
import InputText from "../lv1/InputText";
import SubmitButton from "../lv1/SubmitButton";

const TextForm: React.VFC = () => {
    return (
        <Style>
            <InputText />
            <SubmitButton />
        </Style>
    );
};
export default TextForm;

const Style = styled.div`
    width: 92%;
    margin: 0 auto;
`;
