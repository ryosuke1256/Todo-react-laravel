import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EditButton, DeleteButton, CheckBox, TaskTitle } from "../lv1/_index";
import { API } from "../../api/API";

type Props = {
    task: API;
    tasks: any;
    setTasks: (param: {}) => void;
    change: number;
    setChange: (param: number) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    id: number;
    i: number;
};

const TaskCard: React.VFC<Props> = ({
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
    const [todo, setTodo] = useState(task);
    const [title, setTitle] = useState(task.title);
    const [is_done, setIs_done] = useState<0 | 1>(task.is_done);
    const [editActive, setEditActive] = useState(false);

    useEffect(() => {
        setTitle(task.title);
    }, [task.title]);

    useEffect(() => {
        setIs_done(task.is_done);
    }, [task.is_done]);

    const deleteTask = async () => {
        const data = await axios.delete(`api/tasks/${id}`);
        try {
            //stateをこうゆう書き方はできない
            tasks.splice(i, 1);
            setTasks(tasks);
            setChange(change + 1);
        } catch (err) {
            console.log(err);
        }
    };

    const checkTask = async (is_done: 0 | 1) => {
        is_done === 0 ? (is_done = 1) : (is_done = 0);
        const data: API = {
            title: title,
            is_done: is_done,
        };
        await axios
            .patch(`api/tasks/${id}`, data)
            .then(() => {
                setIs_done(is_done);
                setTitle(title);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const editTask = async (title: string) => {
        const data: API = {
            title: title,
            is_done: is_done,
        };
        await axios
            .patch(`api/tasks/${id}`, data)
            .then(() => {
                setTitle(title);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <_TaskCard>
            <CheckBox is_done={is_done} checkTask={checkTask} />
            <TaskTitle
                is_done={is_done}
                editActive={editActive}
                title={title}
                setTitle={setTitle}
            />
            <EditButton
                editTask={editTask}
                editActive={editActive}
                setEditActive={setEditActive}
                tasksEditActive={tasksEditActive}
                setTasksEditActive={setTasksEditActive}
                title={title}
            />
            <DeleteButton deleteTask={deleteTask} setIs_done={setIs_done} />
        </_TaskCard>
    );
};

export default TaskCard;

const _TaskCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #c4cfd6;
    padding: 1.3%;
    border-bottom: 0px;
    border-radius: 6px;
    background-color: rgb(254, 254, 254);
`;
