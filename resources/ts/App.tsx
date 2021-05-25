import React, { useState, useEffect } from "react";
import axios from "axios";
import { TaskCards } from "./components/lv3/TaskCards";
import { TaskCard, TextForm } from "./components/lv2/_index";
import { API } from "./api/API";

const App: React.VFC = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [userID, setUserID] = useState();
    const [change, setChange] = useState(0); //render走らせる用
    const [tasksEditActive, setTasksEditActive] = useState(false);

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

    const getData = async () => {
        if (!(userID === undefined)) {
            const jsonData = await axios.get(`api/users/${userID}`);
            try {
                setTasks(jsonData.data.map((data: {}) => data));
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getData();
    }, [userID]);

    const postData = async (postData: API) => {
        console.log({ postData });
        const response = await axios.post("api/tasks", postData);
        try {
            tasks.unshift(response.data);
            setTasks(tasks);
            setChange(change + 1);
        } catch (err) {
            console.log(err);
        }
    };

    let i: number = -1;

    return (
        <>
            <TextForm postData={postData} userID={userID} />
            <TaskCards>
                {tasks.map((task: any, key: number) => {
                    i++;
                    return (
                        <TaskCard
                            task={task}
                            setTasks={setTasks}
                            tasks={tasks}
                            change={change}
                            setChange={setChange}
                            tasksEditActive={tasksEditActive}
                            setTasksEditActive={setTasksEditActive}
                            id={task.id}
                            i={i}
                            key={key}
                        />
                    );
                })}
            </TaskCards>
        </>
    );
};

export default App;
