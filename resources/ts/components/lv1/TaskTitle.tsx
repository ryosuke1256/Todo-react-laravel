import React, { useState } from "react";
import styled from "styled-components";

type Props = {
    title: string;
    is_done: 0 | 1;
    editActive: boolean;
};

const TaskTitle: React.VFC<Props> = ({ title, is_done, editActive }: Props) => {
    const [text, setText] = useState(title);

    const handleChange = (e: any) => {
        setText(() => e.target.value);
    };

    if (editActive) {
        return (
            <input
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
                style={{ flexGrow: 1 }}
            />
        );
    } else {
        return <TextStyle is_done={is_done}>{text}</TextStyle>;
    }
};

export default TaskTitle;

const TextStyle = styled.div<{ is_done: 0 | 1 }>`
    flex-grow: 1;
    padding-left: 13px;
    text-decoration: ${(props) =>
        props.is_done === 1 ? "line-through" : "none"};
`;
