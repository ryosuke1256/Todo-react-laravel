import React from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    patchData: (text: string, is_done: 0 | 1, viaCheckBox: boolean) => void;
    text: string;
};

const CheckBox: React.VFC<Props> = ({ is_done, patchData, text }: Props) => {
    const handleChange = (e: any) => {};
    return (
        <_CheckBox>
            <input
                type="checkbox"
                onClick={() => {
                    patchData(text, is_done, true);
                }}
                onChange={(e) => handleChange(e)}
                checked={is_done === 1 ? true : false}
            />
        </_CheckBox>
    );
};

export default CheckBox;

const _CheckBox = styled.div`
    padding-right: 5px;
    transform: scale(1.5);
`;
