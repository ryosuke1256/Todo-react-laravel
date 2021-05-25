import React, { useState } from "react";
import { ButtonStyle } from "../../style/ButtonStyle";

type Props = {
    editTask: (text: string) => Promise<void>;
    editActive: boolean;
    setEditActive: (param: boolean) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    text: string;
};

const EditButton: React.VFC<Props> = ({
    editTask,
    editActive,
    setEditActive,
    tasksEditActive,
    setTasksEditActive,
    text,
}: Props) => {
    const [editButtonTitle, setEditButtonTitle] = useState("編集");
    const changeTaskTitle = () => {
        editTask(text);
        if (!editActive && tasksEditActive) {
            return null;
        } else {
            setEditButtonTitle("変更");
            setEditActive(!editActive);
            setTasksEditActive(true);
            if (editActive) {
                setEditButtonTitle("編集");
                setTasksEditActive(false);
            }
        }
    };

    return (
        <ButtonStyle
            onClick={() => changeTaskTitle()}
            backgroundColor="#3bc2e4"
            style={{ border: "1px solid #2eb9db" }}
        >
            {editButtonTitle}
        </ButtonStyle>
    );
};

export default EditButton;
