import React from "react";

type Props = {
    is_done: 0 | 1;
    patchData: (text: string, is_done: 0 | 1, viaCheckBox: boolean) => void;
    text: string;
    setChecked: (param: boolean) => void;
};

const CheckBox: React.VFC<Props> = ({
    is_done,
    patchData,
    text,
    setChecked,
}: Props) => {
    const handleChange = (e: any) => {
        console.log(e.target.checked);
        setChecked(e.target.checked);
    };
    let checked = false;
    if (is_done === 1) {
        checked = true;
    }
    return (
        <input
            type="checkbox"
            onClick={() => {
                patchData(text, is_done, true);
            }}
            onChange={(e) => handleChange(e)}
            checked={checked}
        />
    );
};

export default CheckBox;
