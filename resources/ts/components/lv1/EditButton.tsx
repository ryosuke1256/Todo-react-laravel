import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {
    patchData: (text: string, checked?: boolean) => Promise<void>;
    change: number;
    setChange: (param: number) => void;
    editActive: boolean;
    setEditActive: (param: boolean) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    text: string;
};

const EditButton: React.VFC<Props> = ({
    patchData,
    change,
    setChange,
    editActive,
    setEditActive,
    tasksEditActive,
    setTasksEditActive,
    text,
}: Props) => {
    const changeTaskTitle = () => {
        patchData(text);
        if (!editActive && tasksEditActive) {
            return null;
        } else {
            setEditActive(!editActive);
            setTasksEditActive(true);
            if (editActive) {
                setTasksEditActive(false);
            }
        }
    };

    return <Style onClick={() => changeTaskTitle()}>編集</Style>;
};

export default EditButton;

const Style = styled.button`
    margin-right: 12px;
`;
