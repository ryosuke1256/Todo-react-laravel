import React, { useContext } from "react";
import { TasksEditActiveContext } from "../lv3/TodoContent";
import { EditIcon } from "./_index";
import { TaskButton as _EditButton } from "../../styles/styledcomponents/TaskButton";
import MediaQuery from "react-responsive";
import { COLOR } from "../../styles";

type Props = {
    editTask: (title: string) => Promise<void>;
    editActive: boolean;
    setEditActive: (param: (prev: boolean) => boolean) => void;
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

    const changeTaskTitle = (): null | undefined => {
        if (!editActive && !tasksEditContext.tasksEditState) {
            setEditActive((prev: boolean) => !prev);
            setEditButtonTitle("変更");
            tasksEditContext.tasksEditDispatch("active");
        } else if (editActive && tasksEditContext.tasksEditState) {
            editTask(title);
            setEditActive((prev: boolean) => !prev);
            setEditButtonTitle("編集");
            tasksEditContext.tasksEditDispatch("deactivate");
        } else {
            return;
        }
    };

    return (
        <>
            <MediaQuery query="(max-width: 598px)">
                <EditIcon changeTaskTitle={changeTaskTitle} />
            </MediaQuery>
            <MediaQuery query="(min-width: 599px)">
                <_EditButton
                    onClick={(e) => {
                        e.stopPropagation();
                        changeTaskTitle();
                    }}
                    backgroundColor={COLOR.MAIN}
                >
                    {editButtonTitle}
                </_EditButton>
            </MediaQuery>
        </>
    );
};

export default EditButton;
