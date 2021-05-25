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
    margin-bottom: 20px;
    background-color: rgba(121, 184, 255, 0.4);
`;
