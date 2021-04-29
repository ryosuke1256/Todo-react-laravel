import React from "react";

type Props = {
    title: string;
    key: number;
};

const Task: React.VFC<Props> = ({ title }) => {
    return (
        <div style={{ border: "1px solid", marginBottom: "2px" }}>{title}</div>
    );
};

export default Task;
