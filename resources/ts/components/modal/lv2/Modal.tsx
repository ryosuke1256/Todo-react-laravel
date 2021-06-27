import React from "react";
import styled from "styled-components";
import TagColor_Modal from "../lv1/ColoredTag_Modal";
import { Color } from "../../../type/Color";
import axios from "axios";
import { TagAPI } from "../../../type/api/TagAPI";
import { TaskAndColor } from "../../../type/TaskAndColor";
import customMedia from "../../../style/customMedia";

type Props = {
    hasModalOpened: boolean;
    setHasModalOpened: (param: boolean) => void;
    selected_color: Color;
    setSelected_color: (prevState: any) => boolean | void;
    taskID?: number;
    tagID: number | null;
    setTagID: any;
    task: TaskAndColor;
    hasDonePostTag: boolean;
    setHasDonePostTag: (param: boolean) => void;
};

//prettier-ignore
const Modal: React.VFC<Props> = ({hasModalOpened,selected_color,setHasModalOpened,setSelected_color,taskID,setTagID,tagID,task,hasDonePostTag,setHasDonePostTag}: Props) => {
    if (!hasModalOpened) {
        return null;
}

    const postTag = async (postData:TagAPI) => {
        console.log({postData});
        const res = await axios.post('api/tags',postData);
        try {
            setTagID(res.data.id);
            task.red = res.data.checked_red;
            task.blue = res.data.checked_blue;
            task.yellow = res.data.checked_yellow;
            task.green = res.data.checked_green;
            setHasDonePostTag(true);
        } catch (err) {
            console.log(err);
        }
    }

    const changeTag = async (patchData:TagAPI) => {
        patchData.checked_red===undefined?patchData.checked_red=false:patchData.checked_red;
        patchData.checked_blue===undefined?patchData.checked_blue=false:patchData.checked_blue;
        patchData.checked_yellow===undefined?patchData.checked_yellow=false:patchData.checked_yellow;
        patchData.checked_green===undefined?patchData.checked_green=false:patchData.checked_green;

        console.log({patchData});
        const res = await axios.patch(`api/tags/${tagID}`, patchData);
        try {
            task.red = res.data.checked_red;
            task.blue = res.data.checked_blue;
            task.yellow = res.data.checked_yellow;
            task.green = res.data.checked_green;
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
        <_BlackBackground>
            <_Modal>
                <div style={{ fontSize: "1.3rem" }}>タグの色を選択する</div>
                <_TagColors>
                    <TagColor_Modal
                        backgroundColor={"rgba(255, 65, 51)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.red}
                        i={0}
                    />
                    <TagColor_Modal
                        backgroundColor={"rgba(51, 194, 255)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.blue}
                        i={1}
                    />
                    <TagColor_Modal
                        backgroundColor={"rgba(250, 250, 0)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.yellow}
                        i={2}
                    />
                    <TagColor_Modal
                        backgroundColor={"rgba(48, 255, 69)"}
                        setSelected_color={setSelected_color}
                        selected_color={selected_color}
                        initChecked={selected_color.green}
                        i={3}
                    />
                </_TagColors>
                <_CloseButton
                    onClick={() => {
                        setHasModalOpened(false);
                        hasDonePostTag?
                        changeTag({
                            checked_red:selected_color.red,
                            checked_blue:selected_color.blue,
                            checked_yellow:selected_color.yellow,
                            checked_green:selected_color.green
                            
                        }): 
                        postTag({
                            task_id:taskID,
                            checked_red:selected_color.red,
                            checked_blue:selected_color.blue,
                            checked_yellow:selected_color.yellow,
                            checked_green:selected_color.green
                        })
                    }}
                >
                    閉じる
                </_CloseButton>
            </_Modal>
        </_BlackBackground>
    );
};

export default Modal;

const _BlackBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(116, 116, 116, 0.74);
    z-index: 500;
    cursor: pointer;
`;

const _Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 500px;
    width: 500px;
    padding: 50px;
    background-color: #fff;
    z-index: 1000;
    border-radius: 30px;
    ${customMedia.lessThan("mobile")`
        height:60vh;
        width:95vw;
    `}
    ${customMedia.between("mobile", "tablet")`
        height:60vh;
        width:80vw;
    `}
    ${customMedia.greaterThan("tablet")`
    
    `}
`;

const _TagColors = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const _CloseButton = styled.div`
    display: inline-block;
    margin-top: 40px;
    padding: 10px;
    border-radius: 10px;
    background-color: #d6d6d6;
`;
