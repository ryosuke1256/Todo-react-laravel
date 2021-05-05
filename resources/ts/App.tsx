import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/lv2/Header";
import TaskCard from "./components/lv2/TaskCard";
import TextForm from "./components/lv2/TextForm";
import { TaskCards } from "./components/lv3/TaskCards";

const App: React.VFC = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [change, setChange] = useState(0); //render走らせる用
    const [tasksEditActive, setTasksEditActive] = useState(false);

    const getData = async () => {
        const jsonData = await axios.get("api/tasks");
        try {
            setTasks(jsonData.data.map((data: {}) => data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    type Data = {
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
    console.log(tasks);

    return (
        <>
            <Header />
            <TextForm postData={postData} />
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
