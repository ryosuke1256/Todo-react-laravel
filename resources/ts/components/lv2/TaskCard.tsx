import React, { useState } from "react";
import styled from "styled-components";
import EditButton from "../lv1/EditButton";
import DeleteButton from "../lv1/DeleteButton";
import CheckBox from "../lv1/CheckBox";
import TaskTitle from "../lv1/TaskTitle";
import axios from "axios";

type API = {
    id: number;
    title: string;
    is_done: 0 | 1;
    created_at?: string;
    updated_at?: string;
};

type Props = {
    title: string;
    task: API;
    tasks: [];
    setTasks: (param: {}) => void;
    change: number;
    setChange: (param: number) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    id: number;
    i: number;
};

const TaskCard: React.VFC<Props> = ({
    title,
    task,
    tasks,
    setTasks,
    change,
    setChange,
    tasksEditActive,
    setTasksEditActive,
    id,
    i,
}: Props) => {
    const [is_done, setIs_done] = useState<0 | 1>(task.is_done);
    const [editActive, setEditActive] = useState(false);
    const [text, setText] = useState(title);

    const deleteData = async () => {
        console.log(id);
        await axios.delete(`api/tasks/${id}`);
        try {
            tasks.splice(i, 1);
            setTasks(tasks);
            setChange(change + 1);
        } catch (error) {
            console.log(error);
        }
    };

    type Data = {
        title: string;
        is_done: 0 | 1;
    };

    const patchData = async (checked: boolean) => {
        const data: Data = {
            title: task.title,
            is_done: checked ? 1 : 0,
        };
        console.log(data);
        await axios.put(`api/tasks/${id}`, data);
        try {
            checked ? setIs_done(1) : setIs_done(0);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Style>
            <CheckBox
                is_done={is_done}
                setIs_done={setIs_done}
                patchData={patchData}
            />
            <TaskTitle
                title={title}
                is_done={is_done}
                editActive={editActive}
                text={text}
                setText={setText}
            />
            <EditButton
                patchData={patchData}
                change={change}
                setChange={setChange}
                editActive={editActive}
                setEditActive={setEditActive}
                tasksEditActive={tasksEditActive}
                setTasksEditActive={setTasksEditActive}
            />
            <DeleteButton deleteData={deleteData} />
        </Style>
    );
};

export default TaskCard;

const Style = styled.div`
    display: flex;
    border: 1px solid #c4cfd6;
    width: 90%;
    margin: 0 auto;
    padding: 13px;
    border-bottom: 0px;
    border-radius: 6px;
`;
