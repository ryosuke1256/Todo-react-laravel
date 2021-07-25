import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import customMedia from "../../styles/customMedia";
import { COLOR, FONT } from "../../styles/index";
import { Link } from "react-router-dom";
import { User } from "../../types/User";

type Props = {
    setIs_authenticated: (param: boolean) => void;
    setUserData: (param: User) => void;
    is_authenticated: boolean;
    userName: string;
};

const Header: React.VFC<Props> = ({
    setIs_authenticated,
    setUserData,
    is_authenticated,
    userName,
}: Props) => {
    const [is_show, setIs_show] = useState(false);

    const logout = async (): Promise<void> => {
        await axios
            .post("/logout")
            .then(() => {
                setIs_authenticated(false);
                setUserData({ userID: null, userName: "" });
                setIs_show(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <_Header>
            <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
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
                    <_Title>はぴたす</_Title>
                </_TapableRange>
            </Link>
            {is_authenticated ? (
                <_userName
                    onClick={(e) => {
                        e.preventDefault();
                        setIs_show((prevState) => !prevState);
                    }}
                >
                    {userName}▼
                    {is_show ? (
                        <_List onClick={logout}>
                            <_Logout>ログアウト</_Logout>
                        </_List>
                    ) : null}
                </_userName>
            ) : null}
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
    background-color: ${COLOR.MAIN};
    opacity: 0.96;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    ${customMedia.lessThan("mobile")`
        padding: 8px 40px;
    `}
    ${customMedia.between("mobile", "tablet")`
        padding: 8px 80px;
    `}
    ${customMedia.greaterThan("tablet")`
    `}
`;

const _TapableRange = styled.div``;

const _Title = styled.div`
    display: inline-block;
    color: ${COLOR.BASE};
    padding: 0.45rem 1rem;
    font-size: ${FONT.LARGE}px;
    font-family: "arial unicode ms";
`;

const _userName = styled.div`
    line-height: 44px;
    color: ${COLOR.BASE};
    cursor: pointer;
`;

const _List = styled.div`
    display: table;
    text-align: center;
    position: absolute;
    top: 50px;
    right: 100px;
    height: 50px;
    width: 150px;
    background-color: white;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    color: #5c5c5c;
    cursor: pointer;
    ${customMedia.lessThan("mobile")`
        right:30px;
    `}
    ${customMedia.between("mobile", "tablet")`

    `}
    ${customMedia.greaterThan("tablet")`
    
    `}
`;

const _Logout = styled.div`
    display: table-cell;
    vertical-align: middle;
    &:hover {
        opacity: 0.6;
    }
`;
