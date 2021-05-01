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
            console.log(jsonData.data);
            console.log(jsonData.data[0].title);
            console.log(jsonData.data.map((data: {}) => data));
            setTasks(jsonData.data.map((data: {}) => data));
        } catch (error) {
            console.log(error);
        }
    };

    // type param = {
    //     text: string;
    //     // is_done: 0 | 1;
    // };

    // const postData = async (data: param) => {
    //     console.log(data);
    //     const response = await axios.post("api/tasks", data);
    //     try {
    //         setTasks(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    //sample
    const postData = async (data) => {
        console.log("postした！");
        // const data = {
        //     title: "さしすせそai",
        //     is_done: 0,
        // };
        const response = await axios.post("api/tasks", data);
        try {
            console.log("成功！");
            tasks.push(response.data);
            setTasks(tasks);
            setChange(change + 1);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log("render");
    console.log(tasks);

    return (
        <>
            <Header />
            <TextForm postData={postData} />
            <TaskCards>
                {tasks.map((task: any, key: number) => (
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
