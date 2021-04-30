import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/lv2/Header";
import TaskCard from "./components/lv2/TaskCard";
import TextForm from "./components/lv2/TextForm";
import { TaskCards } from "./components/lv3/TaskCards";

const App: React.VFC = () => {
    const [tasks, setTasks] = useState([]);
    const getData = async () => {
        const jsonData = await axios.get("api/tasks");
        console.log(jsonData.data);
        console.log(jsonData.data[0].title);
        console.log(jsonData.data.map((data: {}) => data));
        setTasks(jsonData.data.map((data: {}) => data));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Title />
            <TextForm />
            <TaskCards>
                {tasks.map((task: any, key) => (
                    <TaskCard
                        title={task.title}
                        is_done={task.is_done}
                        key={key}
                    />
                ))}
            </TaskCards>
        </>
    );
};

export default App;
