import React from "react";
import axios from "axios";
import styled from "styled-components";
import customMedia from "../../style/customMedia";
import { ColoredTag_Modal } from "../lv1/_index";
import { TagAPI, Color, TaskAndColor } from "../../type/_index";
import { changeUndefinedToFalse as chgFalse } from "../../utils/index";

type Props = {
    hasModalOpened: boolean;
    selected_color: Color;
    setHasModalOpened: (param: boolean) => void;
    setSelected_color: (param: Color) => void;
    taskID?: number;
    tagID: number | null;
    setTagID: (param: number) => void;
    tasks: TaskAndColor[];
    task: TaskAndColor;
    setTasks: (param: TaskAndColor[]) => void;
    i: number;
};

type PatchTagData = Required<Omit<TagAPI, "task_id">>;

//prettier-ignore
const Modal: React.VFC<Props> = ({hasModalOpened,selected_color,setHasModalOpened,setSelected_color,taskID,tagID,setTagID,tasks,task,setTasks,i}: Props) => {
    if (!hasModalOpened) {
        return null;
}

    const postTag = async (postTagData:TagAPI): Promise<void> => {
        // console.log({postTagData});
        try {
            const res = await axios.post('api/tags',postTagData);
            tasks.splice(i,1,{...task, ...{hasDonePostTag:true,tagID:res.data.id,red:selected_color.red,blue:selected_color.blue,yellow:selected_color.yellow,green:selected_color.green}});
            setTagID(res.data.id);
        } catch (err) {
            console.error(err);
        }
    }

    const changeTag = async (colors:Color): Promise<void> => {
        const patchData:PatchTagData =  {checked_red:chgFalse(colors.red),checked_blue:chgFalse(colors.blue),checked_yellow:chgFalse(colors.yellow),checked_green:chgFalse(colors.green)};
        // console.log({patchData});
        try {
            const res = await axios.patch(`api/tags/${tagID}`, patchData);
            tasks.splice(i,1,{...task, ...{red:res.data.checked_red,blue:res.data.checked_blue,yellow:res.data.checked_yellow,green:res.data.checked_green}});
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <_BlackBackground>
            <_Modal>
                <div style={{ fontSize: "1.3rem",display:"inline-block" }}>タグの色を選択する</div>
                <_TagColors>
                    <ColoredTag_Modal
                        backgroundColor={"rgba(255, 65, 51)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.red}
                        i={0}
                    />
                    <ColoredTag_Modal
                        backgroundColor={"rgba(51, 194, 255)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.blue}
                        i={1}
                    />
                    <ColoredTag_Modal
                        backgroundColor={"rgba(250, 250, 0)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
                        initChecked={selected_color.yellow}
                        i={2}
                    />
                    <ColoredTag_Modal
                        backgroundColor={"rgba(48, 255, 69)"}
                        selected_color={selected_color}
                        setSelected_color={setSelected_color}
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
