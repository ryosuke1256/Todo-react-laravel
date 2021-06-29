import React from "react";
import styled from "styled-components";
import customMedia from "../../style/customMedia";
import WelcomeImage from "../lv1/WelcomeImage";

const WelcomeContent: React.VFC = () => {
    return (
        <_WelcomeContent>
            <WelcomeImage />
            <_WelcomeTitle>
                タスクを入力して追加をクリックで始めよう⭐︎
            </_WelcomeTitle>
        </_WelcomeContent>
    );
};

export default WelcomeContent;

const _WelcomeContent = styled.div`
    padding-top: 60px;
    text-align: center;
`;

const _WelcomeTitle = styled.div`
    font-size: 1.4rem;
    padding-top: 30px;
    color: #5287ec;
    opacity: 0.9;
    ${customMedia.lessThan("mobile")`
        font-size:1.2rem;
    `}
    ${customMedia.between("mobile", "tablet")`

    `} 
    ${customMedia.greaterThan("tablet")`

    `}
`;
