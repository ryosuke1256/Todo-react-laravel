import React from "react";
import styled from "styled-components";
import { ColoredTag } from "../lv1/_index";
import { Color } from "../../types/Color";

type Props = {
    selected_color: Color;
};

const ColoredTags: React.VFC<Props> = React.memo(
    ({ selected_color }: Props) => {
        const { red, blue, yellow, green } = selected_color;

        if (
            (red === false &&
                blue === false &&
                yellow === false &&
                green === false) ||
            (red === undefined &&
                blue === undefined &&
                yellow === undefined &&
                green === undefined)
        ) {
            return <div style={{ height: "10px" }}></div>;
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
    }
);

export default ColoredTags;

const _ColoredTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 10px;
`;
