import React from "react";
import styled from "styled-components";
import EditButton from "../lv1/EditButton";
import DeleteButton from "../lv1/DeleteButton";
import CheckBox from "../lv1/CheckBox";
import TaskTitle from "../lv1/TaskTitle";

type Props = {
    title: string;
    is_done: 0 | 1;
    key: number;
};

const TaskCard: React.VFC<Props> = ({ title, is_done }: Props) => {
    return (
        <Style>
            <CheckBox is_done={is_done} />
            <TaskTitle title={title} is_done={is_done} />
            <EditButton />
            <DeleteButton />
        </Style>
    );
};

export default TaskCard;

const Style = styled.div`
    display: flex;
    border: 1px solid #c4cfd6;
    width: 90%;
    margin: 0 auto;
    padding: 13px;
    border-bottom: 0px;
    border-radius: 6px;
`;
