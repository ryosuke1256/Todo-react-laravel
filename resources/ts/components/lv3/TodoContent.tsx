import React, { useState, useEffect, useCallback, useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import customMedia from "../../styles/customMedia";
import { COLOR } from "../../styles/index";
import { TaskCard, TextForm, WelcomeContent } from "../lv2/_index";
import { TaskAndColor, TaskAPI } from "../../types/_index";
import { reducer } from "../../reducer/reducer";
export const TasksEditActiveContext = React.createContext<any>(false);

type Props = {
    userID: number | null;
};

const TodoContent: React.VFC<Props> = ({ userID }: Props) => {
    const [tasks, setTasks] = useState<TaskAndColor[]>([]);
    const [is_began, setIs_began] = useState(false);
    const [tasksEditActive, dispatch] = useReducer(reducer, false);

    useEffect(() => {
        let unmounted = false;
        getTasks(unmounted);
        return () => {
            unmounted = true;
        };
    }, []);

    const getTasks = async (unmounted: boolean): Promise<void> => {
        if (userID !== null) {
            try {
                const res = await axios.get(`api/tasks/users/${userID}`);
                if (!unmounted) {
                    setTasks(res.data);
                    setIs_began(true);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    const postTask = useCallback(
        async (postData: TaskAPI): Promise<void> => {
            // console.log({ postData });
            try {
                const res = await axios.post("api/tasks", postData);
                const todos = [...tasks];
                todos.unshift(res.data);
                setTasks(todos);
            } catch (err) {
                console.error(err);
            }
        },
        [tasks]
    );

    let i: number = -1;

    return (
        <>
            <TasksEditActiveContext.Provider
                value={{
                    tasksEditState: tasksEditActive,
                    tasksEditDispatch: dispatch,
                }}
            >
                <_Wrapper>
                    <_TodoContent>
                        <TextForm postTask={postTask} userID={userID} />
                        {tasks.length === 0 && is_began === true ? (
                            <WelcomeContent />
                        ) : (
                            <_TaskCards>
                                {tasks.map(
                                    (task: TaskAndColor, key: number) => {
                                        i++;
                                        return (
                                            <TaskCard
                                                task={task}
                                                tasks={tasks}
                                                setTasks={setTasks}
                                                id={task.id}
                                                i={i}
                                                key={key}
                                            />
                                        );
                                    }
                                )}
                            </_TaskCards>
                        )}
                    </_TodoContent>
                </_Wrapper>
            </TasksEditActiveContext.Provider>
        </>
    );
};

export default TodoContent;

const _TaskCards = styled.div`
    padding-top: 20px;
`;

const _TodoContent = styled.div`
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
    min-height: 100vh;
    height: 100%;
    width: 100vw;
    background-color: ${COLOR.BASE};
    padding-bottom: 7rem;
`;
