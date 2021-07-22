import React, { useState } from "react";
import styled from "styled-components";
import { CheckMark } from "./CheckMark";
import { Color } from "../../type/Color";

type Props = {
    backgroundColor: string;
    selected_color: Color;
    setSelected_color: (param: Color) => void;
    initChecked?: boolean;
    i: 0 | 1 | 2 | 3;
};

const ColoredTag_Modal: React.VFC<Props> = ({
    backgroundColor,
    selected_color,
    setSelected_color,
    initChecked,
    i,
}: Props) => {
    const [is_selected, setIs_Selected] = useState(initChecked);

    //TODO:リファクタリング
    const changeColor = (): void => {
        if (i === 0) {
            setSelected_color({
                ...selected_color,
                red: !selected_color.red,
            });
        } else if (i === 1) {
            setSelected_color({
                ...selected_color,
                blue: !selected_color.blue,
            });
        } else if (i === 2) {
            setSelected_color({
                ...selected_color,
                yellow: !selected_color.yellow,
            });
        } else if (i === 3) {
            setSelected_color({
                ...selected_color,
                green: !selected_color.green,
            });
        }
    };

    return (
        <>
            <_TagColor
                onClick={() => {
                    setIs_Selected((prevState) => !prevState);
                    changeColor();
                }}
                is_selected={is_selected}
                backgroundColor={backgroundColor}
            >
                {is_selected ? <CheckMark /> : null}
            </_TagColor>
        </>
    );
};

export default ColoredTag_Modal;

const _TagColor = styled.div<{
    is_selected: boolean | undefined;
    backgroundColor: string;
}>`
    height: 20px;
    width: 80px;
    margin-top: 30px;
    margin-right: 20px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 30px;
`;
