import React from "react";
import { EditIcon } from "./_index";
import { _Button } from "../../style/_Button";
import MediaQuery from "react-responsive";

type Props = {
    editTask: (title: string) => Promise<void>;
    editActive: boolean;
    setEditActive: (prevState: any) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    title: string;
    editButtonTitle: string;
    setEditButtonTitle: (param: string) => void;
};

const EditButton: React.VFC<Props> = ({
    editTask,
    editActive,
    setEditActive,
    tasksEditActive,
    setTasksEditActive,
    title,
    editButtonTitle,
    setEditButtonTitle,
}: Props) => {
    const changeTaskTitle = () => {
        if (!editActive && tasksEditActive) {
            return null;
        } else {
            setEditButtonTitle("変更");
            setEditActive((prevState) => !prevState);
            setTasksEditActive(true);
            if (editActive) {
                editTask(title);
                setEditButtonTitle("編集");
                setTasksEditActive(false);
            }
        }
    };

    return (
        <>
            <div>
                <MediaQuery query="(max-width: 599px)">
                    <EditIcon changeTaskTitle={changeTaskTitle} />
                </MediaQuery>
                <MediaQuery query="(min-width: 599px)">
                    <_Button
                        onClick={() => changeTaskTitle()}
                        backgroundColor="#3bc2e4"
                    >
                        {editButtonTitle}
                    </_Button>
                </MediaQuery>
            </div>
        </>
    );
};

export default EditButton;
