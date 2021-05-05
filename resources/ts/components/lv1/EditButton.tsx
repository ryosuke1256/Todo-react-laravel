import React, { useState } from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    patchData: (text: string, checked?: boolean) => Promise<void>;
    editActive: boolean;
    setEditActive: (param: boolean) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    text: string;
};

const EditButton: React.VFC<Props> = ({
    is_done,
    patchData,
    editActive,
    setEditActive,
    tasksEditActive,
    setTasksEditActive,
    text,
}: Props) => {
    const [editButtonTitle, setEditButtonTitle] = useState("編集");
    const changeTaskTitle = () => {
        let checked = true;
        if (is_done === 1) {
            checked = false;
        }
        patchData(text, checked);
        if (!editActive && tasksEditActive) {
            return null;
        } else {
            setEditButtonTitle("変更");
            setEditActive(!editActive);
            //これで無駄なrender走ってる
            setTasksEditActive(true);
            if (editActive) {
                setEditButtonTitle("編集");
                //これで無駄なrender走ってる
                setTasksEditActive(false);
            }
        }
    };

    return <Style onClick={() => changeTaskTitle()}>{editButtonTitle}</Style>;
};

export default EditButton;

const Style = styled.button`
    margin-right: 12px;
`;
