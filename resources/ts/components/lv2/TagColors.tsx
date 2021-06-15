import React from "react";
import { TagColor } from "../lv1/TagColor";
import styled from "styled-components";
import { Color } from "../../type/color/Color";

type Props = {
    selected_color: Color;
};

//prettier-ignore
const TagColors: React.VFC<Props> = ({selected_color}: Props) => {
    
    //クソみたいな書き方、後でリファクタリング
    const GetTagColors = () => {
        //prettier-ignore
        if (selected_color.red &&selected_color.blue &&selected_color.yellow &&selected_color.green
        ) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor blue={selected_color.blue} />
                    <TagColor yellow={selected_color.yellow} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.red && selected_color.blue && selected_color.yellow) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor blue={selected_color.blue} />
                    <TagColor yellow={selected_color.yellow} />
                </>
            );
        } else if (selected_color.red && selected_color.blue && selected_color.green) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor blue={selected_color.blue} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.red && selected_color.yellow && selected_color.green) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor yellow={selected_color.yellow} />
                    <TagColor green={selected_color.green} />
                </>
            )
        } else if (selected_color.blue && selected_color.yellow && selected_color.green) {
            return (
                <>
                    <TagColor blue={selected_color.blue} />
                    <TagColor yellow={selected_color.yellow} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.yellow && selected_color.green) {
            return (
                <>
                    <TagColor yellow={selected_color.yellow} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.blue && selected_color.green) {
            return (
                <>
                    <TagColor blue={selected_color.blue} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.blue && selected_color.yellow) {
            return (
                <>
                    <TagColor blue={selected_color.blue} />
                    <TagColor yellow={selected_color.yellow} />
                </>
            );
        } else if (selected_color.red && selected_color.green) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor green={selected_color.green} />
                </>
            );
        } else if (selected_color.red && selected_color.yellow) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor yellow={selected_color.yellow} />
                </>
            );
        } else if (selected_color.red && selected_color.blue) {
            return (
                <>
                    <TagColor red={selected_color.red} />
                    <TagColor blue={selected_color.blue} />
                </>
            );
        } else if (selected_color.red) {
            return <TagColor red={selected_color.red} />;
        } else if (selected_color.blue) {
            return <TagColor blue={selected_color.blue} />;
        } else if (selected_color.yellow) {
            return <TagColor yellow={selected_color.yellow} />;
        } else if (selected_color.green) {
            return <TagColor green={selected_color.green} />;
        } else {
            return <div>＋</div>;
        }
    };

    return (
        <_TagColors>
            <GetTagColors />
        </_TagColors>
    );
};

export default TagColors;

const _TagColors = styled.div`
    display: flex;
    height: 10px;
`;
