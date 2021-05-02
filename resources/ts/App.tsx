import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/lv2/Header";
import TaskCard from "./components/lv2/TaskCard";
import TextForm from "./components/lv2/TextForm";
import { TaskCards } from "./components/lv3/TaskCards";

// type API = {
//     id: number;
//     title: string;
//     is_done: number;
//     created_at?: string;
//     updated_at?: string;
// };

const App: React.VFC = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [change, setChange] = useState(0);

    const getData = async () => {
        const jsonData = await axios.get("api/tasks");
        try {
            console.log(jsonData.data.map((data: {}) => data));
            setTasks(jsonData.data.map((data: {}) => data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const postData = async (postData) => {
        const response = await axios.post("api/tasks", postData);
        try {
            console.log("成功！");
            tasks.unshift(response.data);
            setTasks(tasks);
            setChange(change + 1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <TextForm postData={postData} />
            <TaskCards>
                {tasks.map((task: any, key: number) => (
                    <TaskCard
                        title={task.title}
                        is_done={task.is_done}
                        setTasks={setTasks}
                        id={task.id}
                        key={key}
                    />
                ))}
            </TaskCards>
        </>
    );
};

export default App;
