import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    is_done: number;
};

const TaskTitle: React.VFC<Props> = ({ title, is_done }: Props) => {
    console.log(is_done);

    if (is_done === 0) {
        return <Style is_done={is_done}>{title}</Style>;
    } else if (is_done === 1) {
        return <Style is_done={is_done}>{title}</Style>;
    } else {
        return null;
    }
};

export default TaskTitle;

const Style = styled.div<{ is_done: number }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
`;
