import React from "react";
import styled from "styled-components";

type Props = {
    is_done: 0 | 1;
    checkTask: (is_done: 0 | 1) => Promise<void>;
};

const CheckBox: React.VFC<Props> = ({ is_done, checkTask }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
    return (
        <_CheckBox>
            <input
                type="checkbox"
                onClick={() => {
                    checkTask(is_done);
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
