import React from "react";
import styled from "styled-components";

type Props = {
    red: boolean;
    blue: boolean;
    yellow: boolean;
    green: boolean;
    i: 0 | 1 | 2 | 3;
};

//prettier-ignore
const ColoredTag: React.VFC<Props> = ({ red, blue, yellow, green, i }: Props) => {
    if (i === 0) {
        return red ? <_TagColor red={red} /> : null;
    } else if (i === 1) {
        return blue ? <_TagColor blue={blue} /> : null;
    } else if (i === 2) {
        return yellow ? <_TagColor yellow={yellow} /> : null;
    } else if (i === 3) {
        return green ? <_TagColor green={green} /> : null;
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
