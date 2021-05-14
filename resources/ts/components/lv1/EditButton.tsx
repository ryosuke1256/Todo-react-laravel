import React, { useState } from "react";
import { ButtonStyle } from "../../style/ButtonStyle";

type Props = {
    is_done: 0 | 1;
    patchData: (
        text: string,
        is_done: 0 | 1,
        viaCheckBox: boolean
    ) => Promise<void>;
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
        patchData(text, is_done, false);
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
