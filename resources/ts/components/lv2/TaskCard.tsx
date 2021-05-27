import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EditButton, DeleteButton, CheckBox, TaskTitle } from "../lv1/_index";
import { API } from "../../api/API";

type Props = {
    task: API;
    tasks: [API];
    setTasks: (param: {}) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    id: number;
    i: number;
};

const TaskCard: React.VFC<Props> = ({
    task,
    tasks,
    setTasks,
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
        setIs_done(task.is_done);
    }, [task]);

    const deleteTask = async () => {
        const res = await axios.delete(`api/tasks/${id}`);
        try {
            setTasks(tasks.filter((task) => task.id !== res.data.id));

            // tasks.splice(i, 1);
            // setTasks(tasks);
            // setChange(change + 1);
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
                //tasksのis_doneも変更しないといけない
                tasks[i].is_done = is_done;
                setIs_done(is_done);
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
