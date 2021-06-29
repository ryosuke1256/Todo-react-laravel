import React, { useState, useEffect } from "react";
import axios from "axios";
import { TaskCard, TextForm, WelcomeContent } from "../lv2/_index";
import { TaskAPI } from "../../type/api/TaskAPI";
import { TaskAndColor } from "../../type/TaskAndColor";
import styled from "styled-components";
import customMedia from "../../style/customMedia";

type Props = {
    userID: string;
};

const TodoContent: React.VFC<Props> = ({ userID }: Props) => {
    const [tasks, setTasks] = useState<any>([]);
    const [change, setChange] = useState(0); //render走らせる用
    const [tasksEditActive, setTasksEditActive] = useState(false);
    const [is_began, setIs_began] = useState(false);

    useEffect(() => {
        getTasks();
    }, [userID]);

    const getTasks = async () => {
        if (!(userID === "")) {
            const Data = await axios.get(`api/tasks/users/${userID}`);
            console.log(Data);
            try {
                setTasks(Data.data.map((data: {}) => data));
                setIs_began(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const postTask = async (postData: TaskAPI) => {
        console.log({ postData });
        const res = await axios.post("api/tasks", postData);
        try {
            tasks.unshift(res.data);
            setChange(change + 1);
        } catch (err) {
            console.log(err);
        }
    };

    let i: number = -1;

    return (
        <>
            <_TodoContent>
                <TextForm postTask={postTask} userID={userID} />
                {tasks.length === 0 && is_began === true ? (
                    <WelcomeContent />
                ) : (
                    <_TaskCards>
                        {tasks.map((task: TaskAndColor, key: number) => {
                            i++;
                            return (
                                <TaskCard
                                    task={task}
                                    setTasks={setTasks}
                                    tasks={tasks}
                                    tasksEditActive={tasksEditActive}
                                    setTasksEditActive={setTasksEditActive}
                                    id={task.id}
                                    i={i}
                                    key={key}
                                />
                            );
                        })}
                    </_TaskCards>
                )}
            </_TodoContent>
        </>
    );
};

export default TodoContent;

export const _TaskCards = styled.div`
    padding-top: 20px;
`;

export const _TodoContent = styled.div`
    max-width: 820px;
    margin: 0 auto;
    padding-top: 105px;
    ${customMedia.lessThan("mobile")`
    width: 99vw;
    max-width:500px;
    `}
    ${customMedia.between("mobile", "tablet")`
    width: 84vw;
    max-width: 710px;
    `} 
    ${customMedia.greaterThan("tablet")`
    width: 70vw;
    `}
`;
