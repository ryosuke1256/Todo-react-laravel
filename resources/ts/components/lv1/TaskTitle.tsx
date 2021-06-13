import React from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    editActive: boolean;
    title: string;
    setTitle: (param: () => string) => void;
};

const TaskTitle: React.VFC<Props> = ({
    is_done,
    editActive,
    title,
    setTitle,
}: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(() => e.target.value);
    };

    if (editActive) {
        return (
            <input
                type="text"
                value={title}
                onChange={(e) => handleChange(e)}
                style={{ flexGrow: 1 }}
            />
        );
    } else {
        return <_TaskTitle is_done={is_done}>{title}</_TaskTitle>;
    }
};

export default TaskTitle;

const _TaskTitle = styled.div<{ is_done: 0 | 1 }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
    color: ${(props) => (props.is_done === 1 ? "#6b6b6b" : "#212529")};
`;
