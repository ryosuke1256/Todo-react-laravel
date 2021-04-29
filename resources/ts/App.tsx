import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <ul>
            {tasks.map((task, key) => (
                <li key={key}>{task.title}</li>
            ))}
        </ul>
    );
};

export default App;
