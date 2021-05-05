import React, { useState } from "react";
import styled from "styled-components";

type API = {
    id: number;
    title: string;
    is_done: 0 | 1;
    created_at?: string;
    updated_at?: string;
};

type Props = {
    task: API;
    // is_done: 0 | 1;
    setIs_done: (param: 0 | 1) => void;
    patchData: (text: string, checked: boolean) => void;
    text: string;
    checked: boolean;
    setChecked: (param: boolean) => void;
};

const CheckBox: React.VFC<Props> = ({
    task,
    // is_done,
    setIs_done,
    patchData,
    text,
    checked,
    setChecked,
}: Props) => {
    const handleChange = (e: any) => {
        // console.log(e.target.checked);
        setChecked(e.target.checked);
    };
    return (
        <input
            type="checkbox"
            onClick={() => {
                console.log(checked);
                patchData(text, checked);
            }}
            onChange={(e) => handleChange(e)}
            checked={checked}
        />
    );
};

export default CheckBox;
