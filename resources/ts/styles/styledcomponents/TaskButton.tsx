import styled from "styled-components";
import { Button } from "./BaseButtons";

export const TaskButton = styled(Button)<{
    backgroundColor: string;
    boder?: string;
}>`
    padding: 6px 10px;
    margin: 7px 12px 0 0;
`;
