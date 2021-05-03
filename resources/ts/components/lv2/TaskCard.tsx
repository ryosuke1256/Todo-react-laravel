import React, { useState } from "react";
import styled from "styled-components";
import EditButton from "../lv1/EditButton";
import DeleteButton from "../lv1/DeleteButton";
import CheckBox from "../lv1/CheckBox";
import TaskTitle from "../lv1/TaskTitle";
import axios from "axios";

type Props = {
    title: string;
    task: any;
    tasks: [];
    setTasks: (param: {}) => void;
    change: number;
    setChange: (param: number) => void;
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
    id,
    i,
}: Props) => {
    const [is_done, setIs_done] = useState(task.is_done);

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

    const patchData = () => {
        console.log("patch");
    };

    return (
        <Style>
            <CheckBox
                is_done={is_done}
                setIs_done={setIs_done}
                patchData={patchData}
            />
            <TaskTitle title={title} is_done={is_done} />
            <EditButton />
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
