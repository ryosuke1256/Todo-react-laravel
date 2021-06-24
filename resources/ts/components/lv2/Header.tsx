import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Header: React.VFC = () => {
    const logout = async () => {
        console.log("logout");
    };

    return (
        <_Header>
            <Link to="/" style={{ textDecoration: "none", flexGrow: "1" }}>
                <_TapableRange>
                    <img
                        src="./images/whale.png"
                        alt="クジラ"
                        width="40px"
                        height="40px"
                        style={{
                            display: "inline-block",
                            paddingBottom: "8px",
                        }}
                    />
                    <_Title>Todo</_Title>
                </_TapableRange>
            </Link>
            <_Logout onClick={logout}>ログアウト</_Logout>
        </_Header>
    );
};

export default Header;

const _Header = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    height: 60px;
    width: 100vw;
    padding: 8px 120px;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const _TapableRange = styled.div``;

const _Title = styled.div`
    display: inline-block;
    color: #212529;
    padding: 0.45rem 1rem;
    font-size: 1.3rem;
`;

const _Logout = styled.div`
    color: #5fb7ff;
    line-height: 52px;
    cursor: pointer;
`;
