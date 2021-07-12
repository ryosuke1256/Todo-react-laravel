import React from "react";
import styled from "styled-components";
import TagColor_Modal from "../lv1/ColoredTag_Modal";
import axios from "axios";
import { Color } from "../../../type/Color";
import { TagAPI } from "../../../type/api/TagAPI";
import { TaskAndColor } from "../../../type/TaskAndColor";
import customMedia from "../../../style/customMedia";

type Props = {
    hasModalOpened: boolean;
    selected_color: Color;
    setHasModalOpened: (param: boolean) => void;
    setSelected_color: (param: Color) => void;
    taskID?: number;
    tagID: number | null;
    setTagID: (param: number) => void;
    tasks: [TaskAndColor];
    task: TaskAndColor;
    setTasks: (param: object) => void;
    i: number;
};

//prettier-ignore
const Modal: React.VFC<Props> = ({hasModalOpened,selected_color,setHasModalOpened,setSelected_color,taskID,tagID,setTagID,tasks,task,setTasks,i}: Props) => {
    if (!hasModalOpened) {
        return null;
}

    const postTag = async (postTagData:TagAPI): Promise<void> => {
        // console.log({postTagData});
        const res = await axios.post('api/tags',postTagData);
        try {
            const obj = tasks;
            obj.splice(i,1,{...task, ...{hasDonePostTag:true,tagID:res.data.id,red:selected_color.red,blue:selected_color.blue,yellow:selected_color.yellow,green:selected_color.green}});
            setTasks(obj);
            setTagID(res.data.id);
        } catch (err) {
            console.error(err);
        }
    }

    const changeUndefined = (color:boolean|undefined): boolean => {
        color == undefined ? color = false : undefined;
        return color;
    }

    const changeTag = async (colors:Color): Promise<void> => {
        const changedColors =  {...colors,...{red:changeUndefined(colors.red),blue:changeUndefined(colors.blue),yellow:changeUndefined(colors.yellow),green:changeUndefined(colors.green)}};
        const patchData = {
            checked_red:changedColors.red,
            checked_blue:changedColors.blue,
            checked_yellow:changedColors.yellow,
            checked_green:changedColors.green,
        }
        // console.log({patchData});
        const res = await axios.patch(`api/tags/${tagID}`, patchData);
        try {
            const obj = tasks;
            obj.splice(i,1,{...task, ...{red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green}});
            setTasks(obj);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <_BlackBackground>
            <_Modal>
                <div style={{ fontSize: "1.3rem",display:"inline-block" }}>タグの色を選択する</div>
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
                        tasks[i].hasDonePostTag? changeTag(selected_color): 
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
    max-height: 500px;
    max-width: 500px;
    padding: 50px;
    background-color: #fff;
    z-index: 1000;
    border-radius: 30px;
    text-align: center;
    ${customMedia.lessThan("mobile")`
        height:70vh;
        width:95vw;
        padding: 40px;
    `}
    ${customMedia.between("mobile", "tablet")`
        height:70vh;
        width:83vw;
    `}
    ${customMedia.greaterThan("tablet")`
    
    `}
`;

const _TagColors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const _CloseButton = styled.div`
    display: inline-block;
    margin-top: 40px;
    padding: 10px;
    border-radius: 10px;
    background-color: #d6d6d6;
`;
