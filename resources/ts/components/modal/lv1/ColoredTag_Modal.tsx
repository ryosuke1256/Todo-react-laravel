import React, { useState } from "react";
import styled from "styled-components";
import { CheckMark } from "./CheckMark";
import { Color } from "../../../type/color/Color";

type Props = {
    backgroundColor: string;
    selected_color: Color;
    setSelected_color: (prevState: any) => boolean | void;
    initChecked: boolean;
    i: 0 | 1 | 2 | 3;
};

//prettier-ignore
const TagColorModal: React.VFC<Props> = ({backgroundColor,selected_color,setSelected_color,initChecked,i,}: Props) => {
    const [is_selected, setIs_Selected] = useState(initChecked);

    return (
        <>
            <_TagColor
                onClick={() => {
                    setIs_Selected((prevState) => !prevState);
                    if (i === 0) {
                        setSelected_color({red:!selected_color.red,blue:selected_color.blue,yellow:selected_color.yellow,green:selected_color.green});
                    } else if (i === 1) {
                        setSelected_color({red:selected_color.red,blue:!selected_color.blue,yellow:selected_color.yellow,green:selected_color.green});
                    } else if (i === 2) {
                        setSelected_color({red:selected_color.red,blue:selected_color.blue,yellow:!selected_color.yellow,green:selected_color.green});
                    } else if (i === 3) {
                        setSelected_color({red:selected_color.red,blue:selected_color.blue,yellow:selected_color.yellow,green:!selected_color.green});
                    }
                }}
                is_selected={is_selected}
                backgroundColor={backgroundColor}
            >
                {is_selected ? <CheckMark /> : null}
            </_TagColor>
        </>
    );
};

export default TagColorModal;

const _TagColor = styled.div<{ is_selected; backgroundColor: string }>`
    height: 20px;
    width: 80px;
    margin-top: 30px;
    margin-right: 30px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 30px;
`;
