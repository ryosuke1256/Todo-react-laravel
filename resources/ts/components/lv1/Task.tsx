import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    key: number;
};

const Task: React.VFC<Props> = ({ title }) => {
    return <Style>{title}</Style>;
};

export default Task;

const Style = styled.div`
    border: 1px solid #c4cfd6;
    padding: 10px;
    border-bottom: 0px;
    border-radius: 6px;
`;
