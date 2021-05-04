import React from "react";

type Props = {
    is_done: 0 | 1;
    setIs_done: (param: 0 | 1) => void;
    patchData: (text: string, checked: boolean) => void;
    text: string;
};

const CheckBox: React.VFC<Props> = ({
    is_done,
    setIs_done,
    patchData,
    text,
}: Props) => {
    if (is_done === 1) {
        return (
            <input
                type="checkbox"
                onClick={() => {
                    patchData(text, false);
                }}
                defaultChecked
            />
        );
    } else {
        return (
            <input
                type="checkbox"
                onClick={() => {
                    patchData(text, true);
                }}
            />
        );
    }
};

export default CheckBox;
