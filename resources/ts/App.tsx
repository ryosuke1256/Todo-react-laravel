import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/lv2/Title";
import Task from "./components/lv1/Task";

const App: React.VFC = () => {
    const [tasks, setTasks] = useState([]);
    const getData = async () => {
        const jsonData = await axios.get("api/tasks");
        console.log(jsonData.data);
        console.log(jsonData.data[0].title);
        console.log(jsonData.data.map((data) => data));
        setTasks(jsonData.data.map((data) => data));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Title />
            {tasks.map((task, key) => (
                <Task title={task.title} key={key} />
            ))}
        </>
    );
};

export default App;
