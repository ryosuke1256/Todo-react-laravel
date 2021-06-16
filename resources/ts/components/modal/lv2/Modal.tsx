import React from "react";
import styled from "styled-components";
import TagColor_Modal from "../lv1/ColoredTag_Modal";
import { Color } from "../../../type/color/Color";
import axios from "axios";

type Props = {
    hasModalOpened: boolean;
    setHasModalOpened: (param: boolean) => void;
    selected_color: Color;
    setSelected_color: (prevState: any) => boolean | void;
};

//prettier-ignore
const Modal: React.VFC<Props> = ({hasModalOpened,selected_color,setHasModalOpened,setSelected_color}: Props) => {
    if (!hasModalOpened) {
        return null;
}

    const postTag = async (postData) => {
        console.log({postData});
        const res = await axios.post('api/tags',postData);
        try {

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
                        postTag({
                            task_id:1,
                            checked_red:true,
                            checked_blue:false,
                            checked_yellow:true,
                            checked_green:false
                        });
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
