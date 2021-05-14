import styled from "styled-components";
import customMedia from "../../style/customMedia";

export const TaskCards = styled.div`
    max-width: 1300px;
    width: 85%;
    margin: 0 auto;
    padding-top: 10px;
    //スマホ
    ${customMedia.lessThan("mobile")`
     /* screen width is less than 599px (tablet) */
    width: 100%;
    `} //タブレット
    ${customMedia.between("mobile", "tablet")`
    /* screen width is between 599px (tablet) and 1024px (desktop) */

    `} //PC
    ${customMedia.greaterThan("tablet")`
    /* screen width is greater than 1024px (tablet) */
    
    `}
`;
