import React from "react";
import styled from "styled-components";

type Props = {
    deleteData: () => Promise<void>;
    setIs_done: (param: 0 | 1) => void;
};

const DeleteButton: React.VFC<Props> = ({ deleteData, setIs_done }: Props) => {
    return (
        <Style
            onClick={() => {
                deleteData();
                setIs_done(0);
            }}
        >
            削除
        </Style>
    );
};

export default DeleteButton;

const Style = styled.button`
    /* flex-grow: 3; */
`;
