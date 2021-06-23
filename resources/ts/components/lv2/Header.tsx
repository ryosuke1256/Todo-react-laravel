import React from "react";
import styled from "styled-components";

const Header: React.VFC = () => {
    return (
        <_Header>
            <img
                src="./images/whale.png"
                alt="クジラ"
                width="40px"
                height="40px"
            />
            <_Title>Todo</_Title>
        </_Header>
    );
};

export default Header;

const _Header = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    z-index: 1000;
    height: 60px;
    width: 100vw;
    padding: 8px 120px;
    background-color: #fff;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const _Title = styled.div`
    padding: 0.45rem 1rem;
    font-size: 1.3rem;
`;
