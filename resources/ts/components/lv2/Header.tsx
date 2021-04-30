import React from "react";
import styled from "styled-components";
import { TitleName } from "../lv1/TitleName";

const Header: React.VFC = () => {
    return (
        <Style>
            <TitleName>Todoアプリ</TitleName>
        </Style>
    );
};

export default Header;

const Style = styled.div`
    text-align: center;
    margin-bottom: 15px;
    /* パターン１ */
    border-bottom: 1px solid #c4cfd6;
    /* パターン２ */
    /* background-color: #52bfff; */
    /* color: white; */
`;
