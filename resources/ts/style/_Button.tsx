import styled from "styled-components";

export const _Button = styled.div<{ backgroundColor: string }>`
    display: inline-block;
    text-align: center;
    border: 1px solid #2eb9db;
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.8;
    color: white;
    padding: 6px 10px;
    border-radius: 8px;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;
