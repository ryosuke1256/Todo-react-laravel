import React from "react";
import { ButtonStyle } from "../../style/ButtonStyle";

type Props = {
    deleteData: () => Promise<void>;
    setIs_done: (param: 0 | 1) => void;
};

const DeleteButton: React.VFC<Props> = ({ deleteData, setIs_done }: Props) => {
    return (
        <ButtonStyle
            onClick={() => {
                deleteData();
                setIs_done(0);
            }}
            backgroundColor="#da6161"
            style={{ border: "1px solid #d85858" }}
        >
            削除
        </ButtonStyle>
    );
};

export default DeleteButton;
