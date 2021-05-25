import React, { useState } from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    editActive: boolean;
    text: string;
    setText: (param: any) => void;
};

const TaskTitle: React.VFC<Props> = ({
    is_done,
    editActive,
    text,
    setText,
}: Props) => {
    const handleChange = (e: any) => {
        setText(() => e.target.value);
    };

    if (editActive) {
        return (
            <input
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
                style={{ flexGrow: 1 }}
            />
        );
    } else {
        return <_TaskTitle is_done={is_done}>{text}</_TaskTitle>;
    }
};

export default TaskTitle;

const _TaskTitle = styled.div<{ is_done: 0 | 1 }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
`;
