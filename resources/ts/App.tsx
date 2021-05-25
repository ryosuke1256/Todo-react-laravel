import React, { useState, useEffect } from "react";
import axios from "axios";
import { TaskCards } from "./components/lv3/TaskCards";
import { TaskCard, TextForm } from "./components/lv2/_index";

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
        console.log(userID);
        if (!(userID === undefined)) {
            const jsonData = await axios.get(`api/users/${userID}`);
            try {
                setTasks(jsonData.data.map((data: {}) => data));
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getData();
    }, [userID]);

    type Data = {
        user_id?: number;
        title: string;
        is_done: 0 | 1;
    };

    const postData = async (postData: Data) => {
        console.log(postData);
        const response = await axios.post("api/tasks", postData);
        try {
            console.log(response.data);
            console.log(tasks);
            tasks.unshift(response.data);
            setTasks(tasks);
            setChange(change + 1);
        } catch (error) {
            console.log(error);
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
                            title={task.title}
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
