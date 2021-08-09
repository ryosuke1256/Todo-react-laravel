import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import customMedia from "../../styles/customMedia";
import { ColoredTags, Modal } from "./_index";
import { CheckBox, TaskTitle, EditButton, DeleteIcon } from "../lv1/_index"; //prettier-ignore
import { TaskButton as DeleteButton } from "../../styles/styledcomponents/TaskButton";
import { TaskAPI, TaskAndColor, Color } from "../../types/_index";
import { COLOR } from "../../styles";
import MediaQuery from "react-responsive";

type Props = {
    task: TaskAndColor;
    tasks: TaskAndColor[];
    setTasks: (param: TaskAndColor[]) => void;
    id: number;
    i: number;
};

type PatchTaskData = Pick<TaskAPI, "title" | "is_done">;

const TaskCard: React.VFC<Props> = React.memo(
    ({ task, tasks, setTasks, id, i }: Props) => {
        const [title, setTitle] = useState(task.title);
        const [is_done, setIs_done] = useState(task.is_done);
        const [editActive, setEditActive] = useState(false);
        const [hasModalOpened, setHasModalOpened] = useState(false);
        const [selected_color, setSelected_color] = useState<Color>({red:false,blue:false,yellow:false,green:false}); //prettier-ignore
        const [tagID, setTagID] = useState<number | null>(null);
        const [editButtonTitle, setEditButtonTitle] = useState("編集");

        useEffect(() => {
            getTags();
        }, []);

        const mounted = useRef(false);

        useEffect(() => {
            if (mounted.current) {
                setTitle(task.title);
                setIs_done(task.is_done);
                setSelected_color({
                    red: task.red,
                    blue: task.blue,
                    yellow: task.yellow,
                    green: task.green,
                });
                setTagID(task.tagID);
            } else {
                mounted.current = true;
            }
        }, [task]);

        const getTags = async (): Promise<void> => {
            try {
                const res = await axios.get(`api/tags/tasks/${tasks[i].id}`);
                if (res.data.id !== undefined) {
                    tasks.splice(i,1,{...task, ...{hasDonePostTag:true,tagID:res.data.id,red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green}}); //prettier-ignore
                } else {
                    tasks.splice(i,1,{...task, ...{tagID:res.data.id,red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green}}); //prettier-ignore
                }
                setTagID(res.data.id);
                setSelected_color({red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green}); //prettier-ignore
            } catch (err) {
                console.error(err);
            }
        };

        const deleteTask = async (): Promise<void> => {
            try {
                const res = await axios.delete(`api/tasks/${id}`);
                setTasks(tasks.filter((task) => task.id !== res.data.id));
            } catch (err) {
                console.error(err);
            }
        };

        const checkTask = async (is_done: boolean): Promise<void> => {
            const patchdata: PatchTaskData = {
                title: title,
                is_done: !is_done,
            };
            await axios
                .patch(`api/tasks/${id}`, patchdata)
                .then(() => {
                    setIs_done(!is_done);
                    tasks[i].is_done = !is_done;
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        const editTask = async (title: string): Promise<void> => {
            const patchdata: PatchTaskData = {
                title: title,
                is_done: is_done,
            };
            await axios
                .patch(`api/tasks/${id}`, patchdata)
                .then(() => {
                    setTitle(title);
                    tasks[i].title = title;
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        return (
            <>
                <_TaskCard onClick={() => setHasModalOpened(true)}>
                    <_Wrapper>
                        <CheckBox is_done={is_done} checkTask={checkTask} />
                        <TaskTitle
                            is_done={is_done}
                            editActive={editActive}
                            title={title}
                            setTitle={setTitle}
                            editTask={editTask}
                            setEditActive={setEditActive}
                            setEditButtonTitle={setEditButtonTitle}
                        />
                        <EditButton
                            editTask={editTask}
                            editActive={editActive}
                            setEditActive={setEditActive}
                            title={title}
                            editButtonTitle={editButtonTitle}
                            setEditButtonTitle={setEditButtonTitle}
                        />
                        <MediaQuery query="(max-width: 599px)">
                            <div style={{ paddingLeft: "10px" }}>
                                <DeleteIcon
                                    deleteTask={deleteTask}
                                    setIs_done={setIs_done}
                                />
                            </div>
                        </MediaQuery>
                        <MediaQuery query="(min-width: 599px)">
                            <DeleteButton
                                onClick={(e) => {
                                    e.stopPropagation;
                                    deleteTask();
                                    setIs_done(false);
                                }}
                                backgroundColor={COLOR.ACCENT}
                            >
                                削除
                            </DeleteButton>
                        </MediaQuery>
                    </_Wrapper>
                    <_Wrapper onClick={() => setHasModalOpened(true)}>
                        <ColoredTags selected_color={selected_color} />
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
                    tasks={tasks}
                    setTasks={setTasks}
                    task={task}
                    i={i}
                />
            </>
        );
    }
);

export default TaskCard;

const _TaskCard = styled.div`
    border: 1px solid #d4e0e7;
    padding: 10px 10px 8px 10px;
    border-bottom: 0px;
    border-radius: 6px;
    background-color: rgb(254, 254, 254);
    cursor: pointer;
    &:hover {
        background-color: #fafbfc;
    }
    ${customMedia.lessThan("mobile")`
        padding:13px;
        border-top: 1px solid #deeaf1;
        border-bottom: 1px solid #deeaf1;
        border-right: 0px;
        border-left: 0px;
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
