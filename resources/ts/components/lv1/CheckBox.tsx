import React from "react";

type Props = {
    is_done: 0 | 1;
    setIs_done: (param: 0 | 1) => void;
    patchData: (checked: boolean) => void;
};

const CheckBox: React.VFC<Props> = ({
    is_done,
    setIs_done,
    patchData,
}: Props) => {
    if (is_done === 1) {
        return (
            <input
                type="checkbox"
                onClick={() => {
                    patchData(false);
                }}
                defaultChecked
            />
        );
    } else {
        return (
            <input
                type="checkbox"
                onClick={() => {
                    patchData(true);
                }}
            />
        );
    }
};

export default CheckBox;
