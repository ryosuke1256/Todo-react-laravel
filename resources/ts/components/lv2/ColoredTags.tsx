import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styles/index";
import { ColoredTag } from "../lv1/_index";
import { Color } from "../../types/Color";

type Props = {
    selected_color: Color;
};

//prettier-ignore
const ColoredTags: React.VFC<Props> = React.memo(({ selected_color }: Props) => {
    const obj = { ...selected_color };
    if (
        (obj.red === false && obj.blue === false && obj.yellow === false && obj.green === false) 
        || (obj.red === undefined && obj.blue === undefined && obj.yellow === undefined && obj.green === undefined)
    ) {
        return (
            <_PlusIcon className="fas fa-plus-circle fa-lg"></_PlusIcon>
        );
    } else {
        return (
            <_ColoredTags>
                <ColoredTag selected_color={selected_color} i={0} />
                <ColoredTag selected_color={selected_color} i={1} />
                <ColoredTag selected_color={selected_color} i={2} />
                <ColoredTag selected_color={selected_color} i={3} />
            </_ColoredTags>
        );
    }
});

export default ColoredTags;

const _PlusIcon = styled.i`
    /* color: rgb(55, 165, 255); */
    color: ${COLOR.MAIN};
    opacity: 0.4;
    cursor: pointer;
`;

const _ColoredTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 10px;
    cursor: pointer;
`;
