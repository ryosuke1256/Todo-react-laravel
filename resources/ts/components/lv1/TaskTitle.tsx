import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    is_done: 0 | 1;
    editActive: boolean;
};

const TaskTitle: React.VFC<Props> = ({ title, is_done, editActive }: Props) => {
    if (editActive) {
        return <input type="text" value={title} style={{ flexGrow: 1 }} />;
    } else {
        return <TextStyle is_done={is_done}>{title}</TextStyle>;
    }
};

export default TaskTitle;

const TextStyle = styled.div<{ is_done: 0 | 1 }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
`;
