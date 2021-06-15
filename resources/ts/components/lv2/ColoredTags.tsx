import React from "react";
import ColoredTag from "../lv1/ColoredTag";
import styled from "styled-components";
import { Color } from "../../type/color/Color";

type Props = {
    selected_color: Color;
};

const ColoredTags: React.VFC<Props> = ({ selected_color }: Props) => {
    //prettier-ignore
    if (selected_color.red === false &&selected_color.blue === false &&selected_color.yellow === false &&selected_color.green === false
    ) {
        return <div>＋</div>;
    } else {
        return (
            <_ColoredTags>
                <ColoredTag
                    red={selected_color.red}
                    blue={selected_color.blue}
                    yellow={selected_color.yellow}
                    green={selected_color.green}
                    i={0}
                />
                <ColoredTag
                    red={selected_color.red}
                    blue={selected_color.blue}
                    yellow={selected_color.yellow}
                    green={selected_color.green}
                    i={1}
                />
                <ColoredTag
                    red={selected_color.red}
                    blue={selected_color.blue}
                    yellow={selected_color.yellow}
                    green={selected_color.green}
                    i={2}
                />
                <ColoredTag
                    red={selected_color.red}
                    blue={selected_color.blue}
                    yellow={selected_color.yellow}
                    green={selected_color.green}
                    i={3}
                />
            </_ColoredTags>
        );
    }
};

export default ColoredTags;

const _ColoredTags = styled.div`
    display: flex;
    height: 10px;
`;
