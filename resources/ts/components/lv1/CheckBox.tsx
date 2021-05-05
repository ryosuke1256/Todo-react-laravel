import React from "react";

type Props = {
    is_done: 0 | 1;
    patchData: (text: string, is_done: 0 | 1, viaCheckBox: boolean) => void;
    text: string;
};

const CheckBox: React.VFC<Props> = ({ is_done, patchData, text }: Props) => {
    const handleChange = (e: any) => {};
    return (
        <input
            type="checkbox"
            onClick={() => {
                patchData(text, is_done, true);
            }}
            onChange={(e) => handleChange(e)}
            checked={is_done === 1 ? true : false}
        />
    );
};

export default CheckBox;
