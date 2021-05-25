import React from "react";
import styled from "styled-components";
import { TitleName } from "../lv1/TitleName";

const Header: React.VFC = () => {
    return (
        <_Header>
            <TitleName>Todoアプリ</TitleName>
        </_Header>
    );
};

export default Header;

const _Header = styled.div`
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(121, 184, 255, 0.4);
`;
