import React, { useState, useEffect } from "react";
import axios from "axios";
import { _TaskCards } from "./components/lv3/TaskCards";
import { TaskCard, TextForm } from "./components/lv2/_index";
import { API } from "./api/API";

const App: React.VFC = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [userID, setUserID] = useState();
    const [change, setChange] = useState(0); //render走らせる用
    const [tasksEditActive, setTasksEditActive] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getTasks();
    }, [userID]);

    const getUser = async () => {
        await axios
            .get("api/users")
            .then((res) => {
                setUserID(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getTasks = async () => {
        if (!(userID === undefined)) {
            const Data = await axios.get(`api/users/${userID}`);
            try {
                setTasks(Data.data.map((data: {}) => data));
            } catch (err) {
                console.log(err);
            }
        }
    };

    const postTask = async (postData: API) => {
        console.log({ postData });
        const res = await axios.post("api/tasks", postData);
        try {
            tasks.unshift(res.data);
            setChange(change + 1);
            // setTasks([...tasks, res.data]);
        } catch (err) {
            console.log(err);
        }
    };

    let i: number = -1;

    return (
        <>
            <TextForm postTask={postTask} userID={userID} />
            <_TaskCards>
                {tasks.map((task: API, key: number) => {
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
        </>
    );
};

export default App;
