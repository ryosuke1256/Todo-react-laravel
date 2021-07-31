import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styles";
import TextForm from "../../components/lv2/TextForm";
import { TaskAPI } from "../../types/TaskAPI";

type Props = {
    postTask: (postTask: TaskAPI) => void;
    userID: number | null;
};

const BottomTextForm: React.VFC<Props> = ({ postTask, userID }: Props) => {
    const [is_showTextForm, setIs_showTextForm] = useState(false);
    return (
        <>
            {is_showTextForm && (
                <_BottomTextForm>
                    <TextForm
                        postTask={postTask}
                        userID={userID}
                        is_bottom={true}
                    />
                    <_Wrapper>
                        <_CloseButton onClick={() => setIs_showTextForm(false)}>
                            閉じる
                        </_CloseButton>
                    </_Wrapper>
                </_BottomTextForm>
            )}
            {!is_showTextForm && (
                <_Circle onClick={() => setIs_showTextForm(true)}>
                    <_Plus className="fas fa-plus fa-2x"></_Plus>
                </_Circle>
            )}
        </>
    );
};

export default BottomTextForm;

const _BottomTextForm = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 1000;
    width: 100vw;
    height: 20vh;
    padding-top: 20px;
    text-align: text-center;
    background-color: white;
    border-top: 1px solid #c7d1d6;
    border-radius: 7px;
`;

const _Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const _CloseButton = styled.button`
    color: white;
    background-color: ${COLOR.MAIN};
    padding: 10px;
    border-radius: 10px;
    margin-right: 30px;
    margin-bottom: 60px;
`;

const _Plus = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    color: #f9fcff;
`;

const _Circle = styled.div`
    position: fixed;
    bottom: 25px;
    right: 25%;
    width: 60px;
    height: 60px;
    background-color: ${COLOR.MAIN};
    border-radius: 50%;
`;
