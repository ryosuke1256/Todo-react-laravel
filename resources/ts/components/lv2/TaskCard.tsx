import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ColoredTags } from "./_index";
import Modal from "../modal/lv2/Modal";
import { EditButton, DeleteButton, CheckBox, TaskTitle } from "../lv1/_index"; //prettier-ignore
import { TaskAPI } from "../../type/api/TaskAPI";
import { TaskAndColor } from "../../type/TaskAndColor";
import customMedia from "../../style/customMedia";

type Props = {
    task: TaskAndColor;
    tasks: [TaskAndColor];
    setTasks: (param: {}) => void;
    tasksEditActive: boolean;
    setTasksEditActive: (param: boolean) => void;
    id: number;
    i: number;
};

//prettier-ignore
const TaskCard: React.VFC<Props> = ({task,tasks,setTasks,tasksEditActive,setTasksEditActive,id,i,}: Props) => {
    const [todo, setTodo] = useState(task);
    const [title, setTitle] = useState(task.title);
    const [is_done, setIs_done] = useState<0 | 1>(task.is_done);
    const [editActive, setEditActive] = useState(false);
    const [hasModalOpened, setHasModalOpened] = useState(false);
    const [selected_color, setSelected_color] = useState({red:false,blue:false,yellow:false,green:false}); //prettier-ignore
    const [tagID,setTagID] = useState(null);
    const [hasDonePostTag,setHasDonePostTag] = useState(false);
    const [editButtonTitle, setEditButtonTitle] = useState("編集");

    useEffect(()=>{
        getTags();
    },[])

    useEffect(() => {
        setTitle(task.title);
        setIs_done(task.is_done);
        setSelected_color({red:task.red,blue:task.blue,yellow:task.yellow,green:task.green})
    }, [task]);

    const getTags = async () => {
        const res = await axios.get(`api/tags/tasks/${task.id}`);
        try {
                if (res.data) {
                    setHasDonePostTag(true);
                    setTagID(res.data.id);
                    setSelected_color({red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green});
                    task.red = res.data.checked_red;
                    task.blue = res.data.checked_blue;
                    task.yellow = res.data.checked_yellow;
                    task.green = res.data.checked_green;
                }
        } catch (err) {
            console.log(err);
        }
    };

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
        const data: TaskAPI = {
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
        const data: TaskAPI = {
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
        <>
            <_TaskCard>
                <_Wrapper>
                    <CheckBox is_done={is_done} checkTask={checkTask} />
                    <TaskTitle
                        is_done={is_done}
                        editActive={editActive}
                        title={title}
                        setTitle={setTitle}
                        editTask={editTask}
                        setEditActive={setEditActive}
                        tasksEditActive={tasksEditActive}
                        setTasksEditActive={setTasksEditActive}
                        setEditButtonTitle={setEditButtonTitle}
                    />
                    <EditButton
                        editTask={editTask}
                        editActive={editActive}
                        setEditActive={setEditActive}
                        tasksEditActive={tasksEditActive}
                        setTasksEditActive={setTasksEditActive}
                        title={title}
                        editButtonTitle={editButtonTitle}
                        setEditButtonTitle={setEditButtonTitle}
                    />
                    <DeleteButton
                        deleteTask={deleteTask}
                        setIs_done={setIs_done}
                    />
                </_Wrapper>
                <_Wrapper onClick={() => setHasModalOpened(true)}>
                    <ColoredTags
                        selected_color={selected_color}
                    />
                </_Wrapper>
            </_TaskCard>
            <Modal
                hasModalOpened={hasModalOpened}
                setHasModalOpened={setHasModalOpened}
                selected_color={selected_color}
                setSelected_color={setSelected_color}
                taskID={task.id}
                tagID={tagID}
                setTagID={setTagID}
                task={task}
                hasDonePostTag={hasDonePostTag}
                setHasDonePostTag={setHasDonePostTag}
            />
        </>
    );
};

export default TaskCard;

const _TaskCard = styled.div`
    border: 1px solid #c4cfd6;
    padding: 10px;
    border-bottom: 0px;
    border-radius: 6px;
    background-color: rgb(254, 254, 254);
    ${customMedia.lessThan("mobile")`
        padding:13px;
    `}
    ${customMedia.between("mobile", "tablet")`

    `}
    ${customMedia.greaterThan("tablet")`
    
    `}
`;

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
