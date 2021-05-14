import styled from "styled-components";

export const ButtonStyle = styled.div<{ backgroundColor: string }>`
    display: inline-block;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.9;
    /* color: #252525; */
    color: white;
    padding: 6px 10px;
    border-radius: 4px;
    /* border-bottom: 4px solid #627295; */
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;
