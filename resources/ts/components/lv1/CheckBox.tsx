import React from "react";
import styled from "styled-components";

type Props = {
    is_done: boolean;
    checkTask: (is_done: boolean) => Promise<void>;
};

const CheckBox: React.VFC<Props> = ({ is_done, checkTask }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
    return (
        <_CheckBox
            type="checkbox"
            onClick={(e) => {
                e.stopPropagation();
                checkTask(is_done);
            }}
            onChange={(e) => handleChange(e)}
            checked={is_done}
        />
    );
};

export default CheckBox;

const _CheckBox = styled.input`
    padding-right: 5px;
    transform: scale(1.5);
    cursor: pointer;
`;
