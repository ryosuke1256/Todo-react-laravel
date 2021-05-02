import React from "react";
import styled from "styled-components";

type Props = {
    deleteData: () => Promise<void>;
};

const DeleteButton: React.VFC<Props> = ({ deleteData }: Props) => {
    return <Style onClick={() => deleteData()}>削除</Style>;
};

export default DeleteButton;

const Style = styled.button`
    /* flex-grow: 3; */
`;
