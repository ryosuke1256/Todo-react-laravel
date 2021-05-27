import React from "react";

type Props = {
    text: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.VFC<Props> = ({ text, handleChange }: Props) => {
    return (
        <input
            name="task"
            value={text}
            placeholder="タスクを入力"
            onChange={(e) => handleChange(e)}
            style={{ padding: "5px" }}
        />
    );
};

export default InputText;
