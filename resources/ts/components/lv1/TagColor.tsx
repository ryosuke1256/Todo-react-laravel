import styled from "styled-components";

export const TagColor = styled.div<{
    red?: boolean;
    blue?: boolean;
    yellow?: boolean;
    green?: boolean;
}>`
    height: 10px;
    width: 35px;
    border-radius: 30px;
    margin-left: 10px;
    background-color: ${(props) => (props.red ? "rgba(255, 65, 51)" : null)};
    background-color: ${(props) => (props.blue ? "rgba(51, 194, 255)" : null)};
    background-color: ${(props) => (props.yellow ? "rgba(250, 250, 0)" : null)};
    background-color: ${(props) => (props.green ? "rgba(48, 255, 69)" : null)};
`;
