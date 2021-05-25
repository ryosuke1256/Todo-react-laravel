import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { EditButton, DeleteButton, CheckBox, TaskTitle } from "../lv1/_index";
import { API } from "../../api/API";

type Props = {
    title: string; //task.title
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

type Data = {
    title: string;
    is_done: 0 | 1;
};

const TaskCard: React.VFC<Props> = ({
    title, //task.title
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
    const [editActive, setEditActive] = useState(false);
    const [text, setText] = useState(title);
    const [is_done, setIs_done] = useState<0 | 1>(task.is_done);
    const [taskObj, setTaskObj] = useState(task);

    useEffect(() => {
        setText(title);
    }, [title]);

    useEffect(() => {
        setIs_done(task.is_done);
    }, [task.is_done]);

    const deleteData = async () => {
        await axios.delete(`api/tasks/${id}`);
        try {
            tasks.splice(i, 1);
            setTasks(tasks);
            setChange(change + 1);
        } catch (err) {
            console.log(err);
        }
    };

    const patchData = async (
        text: string,
        is_done: 0 | 1,
        viaCheckBox: boolean
    ) => {
        if (viaCheckBox) {
            is_done === 0 ? (is_done = 1) : (is_done = 0);
        }
        const data: Data = {
            title: text,
            is_done: is_done,
        };
        await axios
            .patch(`api/tasks/${id}`, data)
            .then(() => {
                //tasksの値を書き換えないといけない
                task.is_done = is_done;
                setTasks(tasks);
                setIs_done(is_done);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Style>
            <CheckBox is_done={is_done} patchData={patchData} text={text} />
            <TaskTitle
                is_done={is_done}
                editActive={editActive}
                text={text}
                setText={setText}
            />
            <EditButton
                is_done={is_done}
                patchData={patchData}
                editActive={editActive}
                setEditActive={setEditActive}
                tasksEditActive={tasksEditActive}
                setTasksEditActive={setTasksEditActive}
                text={text}
            />
            <DeleteButton deleteData={deleteData} setIs_done={setIs_done} />
        </Style>
    );
};

export default TaskCard;

const Style = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #c4cfd6;
    padding: 1.3%;
    border-bottom: 0px;
    border-radius: 6px;
    background-color: rgb(254, 254, 254);
`;
