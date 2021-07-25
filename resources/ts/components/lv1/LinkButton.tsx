import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLOR } from "../../styles/index";

export const LinkButton = styled(Link)`
    background-color: ${COLOR.ACCENT};
    display: inline-block;
    font-weight: 600;
    color: white;
    padding: 0.85rem 1.3rem;
    border-radius: 10px;
    opacity: 0.85;
    box-shadow: 0 2px #ad471f;
    margin-left: 30px;
`;
