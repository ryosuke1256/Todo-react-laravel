import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import customMedia from "../../style/customMedia";

type Props = {
    setIs_authenticated: (param: boolean) => void;
    setUserID: (param:number | null) => void;
    is_authenticated:boolean;
};

const Header: React.VFC<Props> = ({ setIs_authenticated, setUserID, is_authenticated }: Props) => {
    const logout = async () => {
        await axios
            .post("/logout")
            .then(() => {
                setIs_authenticated(false);
                setUserID(null);
            })
            .catch((err) => {
                console.log(err);
            });
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
            {is_authenticated? <_Logout onClick={logout}>ログアウト</_Logout>:null}
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
    ${customMedia.lessThan("mobile")`
        padding: 8px 60px;
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
    color: #212529;
    padding: 0.45rem 1rem;
    font-size: 1.3rem;
`;

const _Logout = styled.div`
    color: #5fb7ff;
    line-height: 52px;
    cursor: pointer;
`;
