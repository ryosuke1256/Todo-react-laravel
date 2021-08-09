import React from "react";
import styled from "styled-components";
import { Color } from "../../types/Color";

type Props = {
    selected_color: Color;
    i: 0 | 1 | 2 | 3;
};

const ColoredTag: React.VFC<Props> = ({ selected_color, i }: Props) => {
    if (i === 0) {
        return selected_color.red ? (
            <_TagColor red={selected_color.red} />
        ) : null;
    } else if (i === 1) {
        return selected_color.blue ? (
            <_TagColor blue={selected_color.blue} />
        ) : null;
    } else if (i === 2) {
        return selected_color.yellow ? (
            <_TagColor yellow={selected_color.yellow} />
        ) : null;
    } else if (i === 3) {
        return selected_color.green ? (
            <_TagColor green={selected_color.green} />
        ) : null;
    } else {
        return null;
    }
};

export default ColoredTag;

const _TagColor = styled.div<{
    red?: boolean;
    blue?: boolean;
    yellow?: boolean;
    green?: boolean;
}>`
    height: 10px;
    width: 35px;
    border-radius: 30px;
    margin-left: 10px;
    background-color: ${(props) =>
        props.red ? "rgba(255, 65, 51, 0.7)" : null};
    background-color: ${(props) =>
        props.blue ? "rgba(51, 194, 255, 0.7)" : null};
    background-color: ${(props) =>
        props.yellow ? "rgba(250, 250, 0, 0.7)" : null};
    background-color: ${(props) =>
        props.green ? "rgba(48, 255, 69, 0.7)" : null};
`;
