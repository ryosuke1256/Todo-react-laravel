import React, { useReducer, useContext } from "react";
import { TasksEditActiveContext } from "../lv3/TodoContent";
import { EditIcon } from "./_index";
import { Button } from "./Button";
import MediaQuery from "react-responsive";

type Props = {
    editTask: (title: string) => Promise<void>;
    editActive: boolean;
    setEditActive: (prevState: any) => void;
    title: string;
    editButtonTitle: string;
    setEditButtonTitle: (param: string) => void;
};

const EditButton: React.VFC<Props> = ({
    editTask,
    editActive,
    setEditActive,
    title,
    editButtonTitle,
    setEditButtonTitle,
}: Props) => {
    const tasksEditContext = useContext(TasksEditActiveContext);

    const changeTaskTitle = () => {
        if (!editActive && tasksEditContext.tasksEditState) {
            return null;
        } else {
            setEditButtonTitle("変更");
            setEditActive((prevState) => !prevState);
            tasksEditContext.tasksEditDispatch("active");
            if (editActive) {
                editTask(title);
                setEditButtonTitle("編集");
                tasksEditContext.tasksEditDispatch("deactivate");
            }
        }
    };

    return (
        <>
            <MediaQuery query="(max-width: 599px)">
                <EditIcon changeTaskTitle={changeTaskTitle} />
            </MediaQuery>
            <MediaQuery query="(min-width: 599px)">
                <Button
                    onClick={() => changeTaskTitle()}
                    backgroundColor="#3bc2e4"
                >
                    {editButtonTitle}
                </Button>
            </MediaQuery>
        </>
    );
};

export default EditButton;
