import React from "react";

type Props = {
    text: string;
    handleChange: (e: any) => void;
};

const InputText: React.VFC<Props> = ({ text, handleChange }: Props) => {
    return <input name="task" value={text} onChange={(e) => handleChange(e)} />;
};

export default InputText;
