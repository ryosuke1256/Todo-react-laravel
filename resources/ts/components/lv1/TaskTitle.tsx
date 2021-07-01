import React from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    editActive: boolean;
    title: string;
    setTitle: (param: () => string) => void;
    editTask: (title: string) => Promise<void>;
    setEditActive: (param: boolean) => void;
    setTasksEditActive: (param: boolean) => void;
    setEditButtonTitle: (param: string) => void;
};

const TaskTitle: React.VFC<Props> = ({
    is_done,
    editActive,
    title,
    setTitle,
    editTask,
    setEditActive,
    setTasksEditActive,
    setEditButtonTitle,
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
                style={{
                    flexGrow: 1,
                    outline: "1px solid rgba(179, 179, 179,0.7)",
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        editTask(title);
                        setEditActive(!editActive);
                        setEditButtonTitle("編集");
                        setTasksEditActive(false);
                    }
                }}
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
