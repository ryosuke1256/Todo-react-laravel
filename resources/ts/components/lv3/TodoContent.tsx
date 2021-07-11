import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import customMedia from "../../style/customMedia";
import { TaskAndColor } from "../../type/TaskAndColor";
import { TaskAPI } from "../../type/api/TaskAPI";
import { TaskCard, TextForm, WelcomeContent } from "../lv2/_index";

type Props = {
    userID: string;
};

const TodoContent: React.VFC<Props> = ({ userID }: Props) => {
    const [tasks, setTasks] = useState<any>([]);
    const [tasksEditActive, setTasksEditActive] = useState(false);
    const [is_began, setIs_began] = useState(false);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async (): Promise<void> => {
        if (!(userID === "")) {
            const Data = await axios.get(`api/tasks/users/${userID}`);
            try {
                setTasks(Data.data.map((data: {}) => data));
                setIs_began(true);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const postTask = useCallback(
        async (postData: TaskAPI): Promise<void> => {
            // console.log({ postData });
            const res = await axios.post("api/tasks", postData);
            try {
                const obj = [...tasks];
                obj.unshift(res.data);
                setTasks(obj);
            } catch (err) {
                console.error(err);
            }
        },
        [tasks]
    );

    let i: number = -1;

    return (
        <>
            <_Wrapper>
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
            </_Wrapper>
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

const _Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f9fbfe;
`;
