import React from "react";
import { ButtonStyle } from "../../style/ButtonStyle";

type Props = {
    deleteTask: () => Promise<void>;
    setIs_done: (param: 0 | 1) => void;
};

const DeleteButton: React.VFC<Props> = ({ deleteTask, setIs_done }: Props) => {
    return (
        <ButtonStyle
            onClick={() => {
                deleteTask();
                setIs_done(0);
            }}
            backgroundColor="#da6161"
            style={{ border: "1px solid #db5e5e" }}
        >
            削除
        </ButtonStyle>
    );
};

export default DeleteButton;
