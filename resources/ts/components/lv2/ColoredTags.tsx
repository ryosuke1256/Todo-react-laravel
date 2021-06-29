import React from "react";
import ColoredTag from "../lv1/ColoredTag";
import styled from "styled-components";
import { Color } from "../../type/Color";

type Props = {
    selected_color: Color;
};

const ColoredTags: React.VFC<Props> = ({ selected_color }: Props) => {
    if (selected_color.red === false &&selected_color.blue === false &&selected_color.yellow === false &&selected_color.green === false
        || selected_color.red === undefined &&selected_color.blue === undefined &&selected_color.yellow === undefined &&selected_color.green === undefined) {
        return <div>＋</div>;
    } else {
        return (
            <_ColoredTags>
                <ColoredTag
                    selected_color={selected_color}
                    i={0}
                />
                <ColoredTag
                    selected_color={selected_color}
                    i={1}
                />
                <ColoredTag
                    selected_color={selected_color}
                    i={2}
                />
                <ColoredTag
                    selected_color={selected_color}
                    i={3}
                />
            </_ColoredTags>
        );
    }
};

export default ColoredTags;

const _ColoredTags = styled.div`
    display: flex;
    flex-wrap:wrap;
    height: 10px;
`;
