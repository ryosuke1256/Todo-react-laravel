import React, { useState } from "react";
import { ButtonStyle } from "../../style/ButtonStyle";
import MediaQuery from "react-responsive";

type Props = {
    editTask: (title: string) => Promise<void>;
    editActive: boolean;
    setEditActive: (param: boolean) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    title: string;
};

const EditButton: React.VFC<Props> = ({
    editTask,
    editActive,
    setEditActive,
    tasksEditActive,
    setTasksEditActive,
    title,
}: Props) => {
    const [editButtonTitle, setEditButtonTitle] = useState("編集");
    const changeTaskTitle = () => {
        if (!editActive && tasksEditActive) {
            return null;
        } else {
            editTask(title);
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
        <>
            <MediaQuery query="(max-width: 599px)">
                <svg
                    onClick={() => changeTaskTitle()}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="pen"
                    className="svg-inline--fa fa-pen fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="25"
                    height="25"
                    fill="#3bc2e4"
                >
                    <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path>
                </svg>
            </MediaQuery>
            <MediaQuery query="(min-width: 599px)">
                <ButtonStyle
                    onClick={() => changeTaskTitle()}
                    backgroundColor="#3bc2e4"
                    style={{ border: "1px solid #2eb9db" }}
                >
                    {editButtonTitle}
                </ButtonStyle>
            </MediaQuery>
        </>
    );
};

export default EditButton;
