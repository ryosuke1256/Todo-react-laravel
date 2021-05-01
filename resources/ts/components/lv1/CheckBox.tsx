import React from "react";

type Props = {
    is_done: 0 | 1;
};

const CheckBox: React.VFC<Props> = ({ is_done }: Props) => {
    if (is_done === 1) {
        return <input type="checkbox" checked></input>;
    } else {
        return <input type="checkbox"></input>;
    }
};

export default CheckBox;
