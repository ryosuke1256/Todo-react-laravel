import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.div<{
    backgroundColor: string;
    border?: string;
}>`
    display: inline-block;
    text-align: center;
    border: 1px solid ${(props) => props.border};
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.8;
    color: white;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;

export const LinkButton = styled(Link)<{
    backgroundColor: string;
    boxShadow?: string;
}>`
    display: inline-block;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.8;
    color: white;
    padding: 0.85rem 1.3rem;
    border-radius: 10px;
    box-shadow: 0 2px ${(props) => props.boxShadow};
    &:hover {
        opacity: 0.6;
    }
`;
