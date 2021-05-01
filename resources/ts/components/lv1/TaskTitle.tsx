import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    is_done: 0 | 1;
};

const TaskTitle: React.VFC<Props> = ({ title, is_done }: Props) => {
    return <Style is_done={is_done}>{title}</Style>;
};

export default TaskTitle;

const Style = styled.div<{ is_done: 0 | 1 }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
`;
