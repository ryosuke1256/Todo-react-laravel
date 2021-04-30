import React from "react";
import styled from "styled-components";
import EditButton from "../lv1/EditButton";
import DeleteButton from "../lv1/DeleteButton";
import CheckBox from "../lv1/CheckBox";

type Props = {
    title: string;
    key: number;
};

const TaskCard: React.VFC<Props> = ({ title }) => {
    return (
        <Style>
            <CheckBox />
            {title}
            <EditButton />
            <DeleteButton />
        </Style>
    );
};

export default TaskCard;

const Style = styled.div`
    display: flex;
    border: 1px solid #c4cfd6;
    padding: 10px;
    border-bottom: 0px;
    border-radius: 6px;
`;
